from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from mangum import Mangum  # <-- Wajib ditambahkan untuk deployment Vercel

from predict import predict_text

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

@app.get("/")
def home():
    return {
        "message": "HateGuardID API Running"
    }

@app.post("/predict")
def predict(request: TextRequest):
    return predict_text(request.text)

# <-- Vercel akan mencari variabel 'handler' ini untuk mengeksekusi FastAPI secara serverless
handler = Mangum(app)