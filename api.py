from flask import Flask, jsonify, request
from flask_cors import CORS
from equations import get_final_stats

app = Flask(__name__)
CORS(app, resources={r"/mainvalue": {"origins": "http://localhost:3000"},
                     r"/equations": {"origins": "http://localhost:3000"}})

def process_data(param1, param2, param3):
    # Your processing logic here
    result = f'Processed data: {param1}, {param2}, {param3}'
    return result

@app.route('/emails', methods=['POST'])
def takeEmeil():
    try:
        data = request.get_json()

        param1 = data.get('param1')
        param2 = data.get('param2')
        param3 = data.get('param3')

        if param1 is None or param2 is None or param3 is None:
            raise ValueError('Missing one or more parameters')

        result = process_data(param1, param2, param3)
        print(result)

        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/mainvalue')
def getMainValue():
    main_value = get_final_stats()
    return jsonify({
        'mainvalue': main_value[0]
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
