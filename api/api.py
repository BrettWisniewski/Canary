from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/main-value": {"origins": "http://localhost:3000"},
                    r"/equations": {"origins": "http://localhost:3000"}})

@app.route('/main-value')
def getMainValue():
    return jsonify({
        'main-value': 42
    })

@app.route('/equations')
def getStatistics():
    return jsonify({
        'ispStatus': "ispStatus here",
        'routerLightsUp': 'routerLightsUp here',
        'powerSupply': 'powerSupply here',
        'lostPackage': 'lostPackage here',
        'lostTime': 'lostTime here'
    })

if __name__ == '__main__':
    app.run(debug=True)
