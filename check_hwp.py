import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])

try:
    import olefile
    print("olefile is installed")
except ImportError:
    print("olefile is NOT installed")

