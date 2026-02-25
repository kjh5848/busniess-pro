import sys
import subprocess
import os

def install(package):
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])

try:
    import docx
except ImportError:
    install('python-docx')
    import docx

try:
    import fitz # PyMuPDF
except ImportError:
    install('PyMuPDF')
    import fitz

def extract_docx(path):
    try:
        doc = docx.Document(path)
        return '\n'.join([p.text for p in doc.paragraphs])
    except Exception as e:
        return f"Error reading docx: {e}"

def extract_pdf(path):
    text = ""
    try:
        with fitz.open(path) as doc:
            for page in doc:
                text += page.get_text()
        return text
    except Exception as e:
        return f"Error reading pdf: {e}"

docs = [
    r"d:\workspace\strayCat\초안\1-1. 창업아이템 개발동기 고도화.docx",
    r"d:\workspace\strayCat\[별첨 1] 2025년도 예비창업패키지 사업계획서 양식_바이오_v1.pdf",
    r"d:\workspace\strayCat\[별첨 1] 2025년도 예비창업패키지 사업계획서 양식_바이오_v2.pdf",
    r"d:\workspace\strayCat\부니콘\[공고문] 2026 부니콘 씨드 육성사업(부산 예비창업패키지).pdf"
]

for i, doc in enumerate(docs):
    print(f"Extracting {doc}...")
    content = ""
    if doc.endswith('.docx'):
        content = extract_docx(doc)
    elif doc.endswith('.pdf'):
        content = extract_pdf(doc)
    
    with open(f"d:\\workspace\\strayCat\\extracted_{i}.txt", "w", encoding="utf-8") as f:
        f.write(content)

print("Done.")
