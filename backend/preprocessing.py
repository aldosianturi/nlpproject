import re

def clean_text(text):
    text = re.sub(r'\\n', ' ', text)
    text = re.sub(r'[0-9]+', '', text)
    text = re.sub(r'[^\w\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text)

    return text.strip()