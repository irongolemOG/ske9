import urllib.request
import re

url = "https://kartikeya-chem.preview.emergentagent.com/"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # emergentagent might be rendering via javascript, but let's check for standard img tags
    imgs = re.findall(r'<img[^>]+src="([^">]+)"', html)
    print("Found images:", imgs)
except Exception as e:
    print("Error:", e)
