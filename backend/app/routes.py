from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.database import get_db
import app.models as models
import app.schemas as schemas

router = APIRouter()

@router.post("/signup", response_model=dict)
def signup(user: schemas.SignupRequest, db: Session = Depends(get_db)):
    """
    Inscription d'un nouvel utilisateur
    """
    try:
        # Vérifier si l'email existe déjà
        existing_user = db.query(models.User).filter(models.User.email == user.email).first()
        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Un utilisateur avec cet email existe déjà"
            )
        
        # Créer le nouvel utilisateur
        new_user = models.User(email=user.email)
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        
        return {
            "message": "Inscription réussie !",
            "user_id": new_user.id,
            "email": new_user.email
        }
        
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Erreur lors de l'inscription. L'email existe peut-être déjà."
        )
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="Erreur interne du serveur"
        )
