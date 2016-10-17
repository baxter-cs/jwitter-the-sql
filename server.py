from flask import Flask, request, jsonify, url_for, render_template, make_response, redirect, current_app, abort, Response

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/auth/login', methods=['POST', 'OPTIONS'])
def auth_login():
    data = request.json
    print(data.get('username', None))
    print(data.get('password', None))
    response = {
        'success': True
    }
    return jsonify(**response)

app.run(debug=True, host='0.0.0.0', port=1337)
