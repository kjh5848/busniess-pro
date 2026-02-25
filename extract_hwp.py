import olefile
import zlib
import struct
import sys

def extract_hwp_text(filepath):
    try:
        f = olefile.OleFileIO(filepath)
        dirs = f.listdir()
        
        # Get paragraph text
        text = ""
        
        header = f.openstream("FileHeader")
        header_data = header.read()
        is_compressed = (header_data[36] & 1) == 1

        for d in dirs:
            if d[0] == "BodyText":
                stream = f.openstream(d)
                data = stream.read()
                if is_compressed:
                    try:
                        unpacked_data = zlib.decompress(data, -15)
                    except:
                        unpacked_data = data
                else:
                    unpacked_data = data
                
                i = 0
                while i < len(unpacked_data):
                    if i + 4 > len(unpacked_data):
                        break
                    header_val = struct.unpack_from("<I", unpacked_data, i)[0]
                    rec_type = header_val & 0x3FF
                    rec_len = (header_val >> 20) & 0xFFF
                    i += 4
                    
                    if rec_type == 67: # HWPTAG_PARA_TEXT
                        rec_data = unpacked_data[i:i+rec_len]
                        j = 0
                        para_text = ""
                        while j + 2 <= rec_len:
                            char = struct.unpack_from("<H", rec_data, j)[0]
                            j += 2
                            if 0x0020 <= char <= 0xFFFF:
                                para_text += chr(char)
                            elif char in (10, 13):
                                para_text += "\n"
                        text += para_text + "\n"
                    
                    i += rec_len
        
        return text
    except Exception as e:
        return f"Error: {e}"

hwp_file = r"d:\workspace\strayCat\부니콘\[신청서] 2026년 부니콘 씨드 육성사업(부산 예비창업패키지) (1).hwp"
content = extract_hwp_text(hwp_file)
    
with open(r"d:\workspace\strayCat\extracted_toc.txt", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Extraction successful: Saved to d:\\workspace\\strayCat\\extracted_toc.txt")
