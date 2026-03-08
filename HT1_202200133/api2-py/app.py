from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/check')
def check():
    return '', 200

@app.route('/')
def home():
    return jsonify({
        "Instancia": "Instancia 2 - API #2",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Estudiante - 202200133"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)