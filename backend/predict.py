import os
import json
import pickle
import re
import numpy as np

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import (
    Input,
    Embedding,
    SpatialDropout1D,
    Bidirectional,
    LSTM,
    Dense,
    Dropout,
)
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Mendapatkan lokasi folder 'backend' secara dinamis
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ==========================
# Load tokenizer
# ==========================
tokenizer_path = os.path.join(BASE_DIR, "models", "tokenizer.pkl")
with open(tokenizer_path, "rb") as f:
    tokenizer = pickle.load(f)


# ==========================
# Load config
# ==========================
config_path = os.path.join(BASE_DIR, "models", "config.json")
with open(config_path, "r") as f:
    config = json.load(f)

max_len = config["max_len"]
vocab_size = 10000
embedding_dim = 100


# ==========================
# Load embedding matrix
# ==========================
embedding_path = os.path.join(BASE_DIR, "models", "embedding_matrix.npy")
embedding_matrix = np.load(embedding_path)


# ==========================
# Build model
# ==========================
model = Sequential([
    Input(shape=(max_len,)),

    Embedding(
        vocab_size,
        embedding_dim,
        weights=[embedding_matrix],
        trainable=True
    ),

    SpatialDropout1D(0.3),

    Bidirectional(
        LSTM(
            96,
            dropout=0.3,
            recurrent_dropout=0.3
        )
    ),

    Dense(32, activation="relu"),

    Dropout(0.5),

    Dense(1, activation="sigmoid")
])


# ==========================
# Load weights
# ==========================
weights_path = os.path.join(BASE_DIR, "models", "bilstm_hatespeech.weights.h5")
model.load_weights(weights_path)


# ==========================
# Preprocessing
# ==========================
def clean_text(text):
    text = re.sub(r'\\n', ' ', text)
    text = re.sub(r'[0-9]+', '', text)
    text = re.sub(r'[^\w\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip().lower()


# ==========================
# Prediction
# ==========================
def predict_text(text):
    text = clean_text(text)
    seq = tokenizer.texts_to_sequences([text])

    pad = pad_sequences(
        seq,
        maxlen=max_len,
        padding="post",
        truncating="post"
    )

    prob = model.predict(pad, verbose=0)[0][0]

    label = "Hate Speech" if prob >= 0.5 else "Non Hate Speech"
    confidence = float(prob) if prob >= 0.5 else float(1 - prob)

    return {
        "text": text,
        "prediction": label,
        "confidence": confidence
    }

if __name__ == "__main__":
    result = predict_text("Dasar bodoh kamu")
    print(result)