import olefile
import zlib
import struct

def extract_hwp_text(filepath):
    try:
        f = olefile.OleFileIO(filepath)
        dirs = f.listdir()
        
        # Check if it's a valid HWP 5.0 format
        if ["FileHeader"] not in dirs or ["\x05HwpSummaryInformation"] not in dirs:
            return "Not a valid HWP 5.0 file."
        
        # Determine compressed status
        header = f.openstream("FileHeader")
        header_data = header.read()
        is_compressed = (header_data[36] & 1) == 1
        
        # Get paragraph text
        text = ""
        for d in dirs:
            if d[0] == "BodyText":
                stream = f.openstream(d)
                data = stream.read()
                if is_compressed:
                    unpacked_data = zlib.decompress(data, -15)
                else:
                    unpacked_data = data
                
                # Extract text using struct (simplified implementation)
                i = 0
                while i < len(unpacked_data):
                    header = struct.unpack_from("<I", unpacked_data, i)[0]
                    rec_type = header & 0x3FF
                    rec_len = (header >> 20) & 0xFFF
                    i += 4
                    
                    if rec_type == 67: # HWPTAG_PARA_TEXT
                        rec_data = unpacked_data[i:i+rec_len]
                        j = 0
                        while j < rec_len:
                            char = struct.unpack_from("<H", rec_data, j)[0]
                            j += 2
                            # Ignore control characters, append normal text
                            if char >= 0x0020 and char <= 0xFFFF:
                                text += chr(char)
                            elif char in (10, 13): # enter key
                                text += "\n"
                    
                    i += rec_len
        
        return text
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    hwp_file = r"ABSOLUTE_PATH_TO_YOUR_TARGET.hwp"
    content = extract_hwp_text(hwp_file)
        
    with open(r"ABSOLUTE_PATH_TO_OUTPUT.txt", "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Extraction successful: Saved to ABSOLUTE_PATH_TO_OUTPUT.txt")
