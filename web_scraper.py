from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Empty URL!"

@app.route('/query/')
def scraped():
    url = request.args.get('url')
    print(str(url))
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    
    text = (soup.get_text().strip())
    bytes = len(str(text)) + 1

    return(jsonify({'bytes' : bytes}))
    
if __name__ == "__main__":
    app.run(debug=True)