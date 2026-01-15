export default function handler(req, res) {
    return res.status(200).json(informacion_operador)
}

const informacion_operador = {
  "estado": "exito",
  "mensaje": "Usario encontrado",
  "data": [
      {
          "identificador": "1202977557001",
          "razon_social": "DE SANTIS FRANCO URVES DEIDRES",
          "nombre_representante": "URVES DEIDRES",
          "apellido_representante": "DE SANTIS FRANCO",
          "nombre_tecnico": "",
          "apellido_tecnico": "",
          "direccion": "LOS RIOS / MOCACHE / S/N",
          "telefono_uno": "(05) 200-0000",
          "telefono_dos": "",
          "celular_uno": "0987542136",
          "celular_dos": "",
          "correo": "pruebas@agrocalidad.gob.ec",
          "clave": "8601d2c8beae59430a745131425f09f9",
          "parroquia": "Mocache",
          "id_saniflores": null,
          "provincia": "Los Ríos",
          "canton": "Mocache",
          "tipo_operador": "Natural",
          "gs1": null,
          "registro_orquideas": "",
          "registro_madera": "",
          "fax": "",
          "estado_provisional": null,
          "validacion_sri": "TRUE",
          "fecha_operador": "2017-01-10 16:47:43.896286",
          "tipo_actividad": "",
          "identificador_fin": "1202977557001",
          "correo_fin": "pruebas@agrocalidad.gob.ec"
      }
  ]
}