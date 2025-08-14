// Utilise la variable d'environnement VITE_API_URL si définie, sinon fallback sur /api (utile en dev)
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export default API_BASE_URL;
