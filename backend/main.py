from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import router as signup_router
from app.database import create_tables

create_tables()

app = FastAPI(
    title="Peakflow Technologies API",
    description="API pour la landing page Peakflow Technologies",
    version="1.0.0"
)

ALLOWED_ORIGINS = [
    "*"  # Allow all origins for development; adjust as needed for production
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(signup_router, prefix="/api", tags=["signup"])

# Route d'accueil pour la racine
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l'API Peakflow Technologies"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
