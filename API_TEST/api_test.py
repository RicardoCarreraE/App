from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

usuarios = [
  {
    "id": 1,
    "rut": '12345678-9',
    "contraseña": 'contraseña1',
    "nombre": 'Juan Pérez',
    "rol": 'alumno',
    "user": 1,
    "correo": 'juanperez@duocuc.cl',

  },
  {
    "id": 2,
    "rut": '98765432-1',
    "contraseña": 'contraseña2',
    "nombre": 'María González',
    "rol": 'alumno',
    "user": 1,
    "correo": 'mariagonzalez@duocuc.cl',

  },
  {
    "id": 3,
    "rut": '18468723-1',
    "contraseña": 'contraseña3',
    "nombre": 'Carlos Rodríguez',
    "rol": 'alumno',
    "user": 1,
    "correo": 'carlosrodriguez@duocuc.cl',

  },
  {
    "id": 4,
    "rut": '55556666-7',
    "contraseña": 'contraseña7',
    "nombre": 'Sofía Ramírez',
    "rol": 'chofer',
    "user": 2,
    "correo": 'sofiaramirez@duocuc.cl',

  },
]

@app.route('/login', methods=['POST'])
def login():
    rut = request.json.get('rut')
    password = request.json.get('contraseña')

    usuario = next((u for u in usuarios if u["rut"] == rut and u["contraseña"] == password), None)

    if usuario:
        if usuario["rol"] == 'alumno':
            return jsonify({"message": "Inicio de sesión como alumno exitoso", "tipo": "alumno"}), 200
        elif usuario["rol"] == 'chofer':
            return jsonify({"message": "Inicio de sesión como chofer exitoso", "tipo": "chofer"}), 200
    else:
        return jsonify({"message": "Credenciales incorrectas"}), 401

if __name__ == '__main__':
    app.run(debug=True)