from flask import Flask, request, redirect, url_for
import sys
import os
import json
import re
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/f', methods=["GET", "POST"])
def fulfilme():
    if request.method == "POST":
        if request.headers['Content-Type'] == 'application/json':
            request_data = request.json
            print json.dumps(request_data, indent=4)
            return "received!"
        return "Hello World!"
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True)