import sys
import subprocess
import os

def install(package):
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])

try:
    import pyhwp
except ImportError:
    try:
        install('pyhwp')
        import pyhwp
    except:
        print("Failed to install pyhwp")
        pass

print("Python check complete.")
