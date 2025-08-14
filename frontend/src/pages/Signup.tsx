import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
// Utilise la variable d'environnement VITE_API_URL si définie, sinon fallback sur /api (utile en dev)
const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || '/api';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    
    // Clear error when user starts typing
    if (errors.email) {
      setErrors(prev => ({
        ...prev,
        email: ''
      }));
    }
  };

  const validateEmail = () => {
    const newErrors: {[key: string]: string} = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) {
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (!response.ok) {
        let errorMsg = `Erreur inconnue (${response.status})`;
        if (response.status === 404) {
          errorMsg = "Route /signup introuvable (404). Vérifie l'URL du backend.";
        } else if (response.status === 500) {
          errorMsg = "Erreur serveur (500). Vérifie les logs du backend.";
        } else if (response.status === 400) {
          const err = await response.json().catch(() => null);
          errorMsg = err?.detail || "Requête invalide (400). Vérifie le format envoyé.";
        } else if (response.status === 0) {
          errorMsg = "Impossible de contacter le backend. Vérifie l'URL/API.";
        }
        setErrors(prev => ({ ...prev, email: errorMsg }));
        throw new Error(errorMsg);
      }
      const data = await response.json();
      console.log('Success:', data);
      setIsSuccess(true);
      setEmail('');
    } catch (error: any) {
      let errorMsg = "Erreur lors de l'inscription. Veuillez réessayer.";
      if (error instanceof TypeError) {
        errorMsg = "Erreur réseau : impossible de contacter le backend. Vérifie l'URL/API.";
      } else if (typeof error?.message === 'string') {
        errorMsg = error.message;
      }
      console.error('Erreur lors de l’inscription :', error);
      setErrors(prev => ({ ...prev, email: errorMsg }));
    }
  };

  if (isSuccess) {
    return (
      <>
        <Header />
        <div className="page-container">
          <div className="auth-container">
            <div className="card">
              <h2>Thank You!</h2>
              <p>
                You've been added to our early access list. We'll notify you as soon as Kairos Zero is available.
              </p>
              <Link to="/" className="btn primary">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="auth-container">
          <div className="card">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1>Get Early Access</h1>
              <p>
                Be among the first to experience Kairos Zero
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                Join our exclusive early access list and get notified when we launch.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn primary"
                style={{ width: '100%' }}
              >
                Join Early Access
              </button>
            </form>

            {/* Additional Info */}
            <div style={{
              textAlign: 'center',
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border)'
            }}>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                No spam, ever. We will only contact you about <br/> 
                Peakflow Technologies updates and early access opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;