import PyPDF2
import sys

def extract_pdf_text(filepath):
    text = ""
    with open(filepath, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        for page_num in range(len(reader.pages)):
            text += reader.pages[page_num].extract_text() + "\n"
    return text

pdf_path = r"d:\workspace\strayCat\부니콘\[공고문] 2026 부니콘 씨드 육성사업(부산 예비창업패키지).pdf"
text = extract_pdf_text(pdf_path)

with open(r"d:\workspace\strayCat\공고문_text.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("Extracted PDF text to d:\\workspace\\strayCat\\공고문_text.txt")
