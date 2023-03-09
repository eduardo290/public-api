'use strict'

module.exports = function (req, res) {
  res.json({
    "usuarios": [
      {
        "nombre": "Juan",
        "apellido": "Pérez",
        "edad": 30,
        "email": "juanperez@example.com",
        "direccion": {
          "calle": "Calle 123",
          "ciudad": "Buenos Aires",
          "pais": "Argentina"
        }
      },
      {
        "nombre": "María",
        "apellido": "García",
        "edad": 25,
        "email": "mariagarcia@example.com",
        "direccion": {
          "calle": "Calle 456",
          "ciudad": "Madrid",
          "pais": "España"
        }
      },
      {
        "nombre": "John",
        "apellido": "Smith",
        "edad": 40,
        "email": "johnsmith@example.com",
        "direccion": {
          "calle": "123 Main Street",
          "ciudad": "New York",
          "pais": "Estados Unidos"
        }
      }
    ]
  }
  )
}
