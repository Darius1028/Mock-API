export default function handler(req, res, endpoint) {
    const data = req.body  
    
    if (data.identificador === '1718050709') {
        res.status(200).json(uno)
        return
    }
    
    if (data.identificador === '1718050709001') {
        res.status(200).json(dos)
        return
    }
    
    // Caso por defecto si no coincide ningún parámetro
    res.status(400).json({ 
        error: "Parámetro inválido",
        mensaje: JSON.stringify(data)
    })
}

const uno = {
    "estado": "exito",
    "mensaje": true,
    "token": {
        "estado": "exito",
        "mensaje": "Credenciales válidas",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxNzE4MDUwNzA5IiwiaXNzIjoiU0lTVEVNQSBHVUlBIFRFU1QiLCJhdWQiOiJBUEkgQUdST1NFUlZJQ0lPUyBURVNUIiwiaWF0IjoxNzY1Mjg4NjA2LCJuYmYiOjE3NjUyODg2MDYsImV4cCI6MTc2NTI5MjIwNn0.skum7Vcq-AR9Cos1VAptQLA6WEkPONCT6DmBna_-QgUzLhAjXBk7C71pdLISTE4_7vdxBz6-ZORl8AxBzB6BjJUAnSgj8XmHRrBvUJrpz6UUT75_JQp2Rk_zAXvTpSJ_9d0FcHh4AM4NzPVaYBTbPeiqrGZGPmsYyCTbkKib5kSFIPMNI1XLY83oSBrwkGpqVkK5cjFaJRsc8SqqV7YlWB4JhufCw4xQ02HI8JZvRS0iESxnVAxPTsOTs9gvLL18ziSQXDHhs357qaE4MajxnPefh41ncLIKYEOi38rAAaF0Y-hCSOQLfTtL7SHzTfZJLyRiaxFsPJSFHwaQktLS3SHNJ0iI5RCOtN5EQIb9dExZTC2RnsMTuyzffN6PCoHfCrMaxqBAAA49XfOmPlCsAhdpNXNCw4o-ljGmRpOMa0TZnsblyR8KK-XF3LE9HOst367bXyThIHTs8wrZZOl9zi1w2lTYVo2IKq5-NnonmZii8ZBo6IvX90NycPy39X7a",
        "expiraEn": 1765292206,
        "estatusCode": 200,
        "not-before-policy": 1765288606
    },
    "data": [
        {
            "identificador": "1718050709",
            "perfiles": "2",
            "nombre": "BERNARDO DARIO",
            "apellido": "MORALES LOPEZ",
            "id_localizacion_provincia": 259,
            "id_localizacion_canton": 448,
            "id_localizacion_parroquia": 2004,
            "estado_empleado": "activo",
            "mail_personal": "dariodbml@gmail.com",
            "mail_institucional": "bernardo.morales@agrocalidad.gob.ec",
            "tipo_contrato": "Contrato de Servicios Ocasionales",
            "estado_contrato": 1,
            "identificador_op": null,
            "razon_social_op": null,
            "nombre_representante_op": null,
            "apellido_representante_op": null,
            "direccion_op": null,
            "telefono_uno_op": null,
            "celular_uno_op": null,
            "correo_op": null,
            "provincia_op": null,
            "canton_op": null,
            "parroquia_op": null,
            "identificador_fin": null,
            "correo_fin": null
        }
    ]
}

const dos = {
    "estado": "exito",
    "mensaje": true,
    "token": {
        "estado": "exito",
        "mensaje": "Credenciales válidas",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4NDAwMDc4MDQ3IiwiaXNzIjoiU0lTVEVNQSBHVUlBIFRFU1QiLCJhdWQiOiJBUEkgQUdST1NFUlZJQ0lPUyBURVNUIiwiaWF0IjoxNzYxMDUyNjU0LCJuYmYiOjE3NjEwNTI2NTQsImV4cCI6MTc2MTA1NjI1NH0.LRds7llB7srf2Eh5SQUPovpEG3Bg_btwGUJ6-IbKcDqGlnCZzLwjxjPfYwWmfnC_OyVjkVHxvO91Mz5s8dD7UX0wtsuSzLIS9yBr38W9PpGflFspsubDDfEXAT_cFC9C79q7IewjkF4YAk_PSwofLyFt1roERHpUPclmM0lvrpKmrxOYbg4AfKHj0QpiLRAUy5BGA6PsFvzIaV5DkiBrCv6_aNKHyepPMrybzbwnMf7Mzcm_PvWOFsOYrZsmYWP4dJjsCI0evqUoz5Ahi4DzGcmdBapF5CryO8EENjVmOAPivguh3Jp5zgl3EPoyMh0xqwy61L-MMN53Q_7NcR44ouumYSnqz2edaIo7OVhdHwGA-YDTx-kSAADwAEwnnxITFDNvaK9MZS7dw86G1nBMywquPrl49t5OskjZlRsMKpnCrZLQMsP8T1zedVyDqZWDXpsWTRhKfCYPu3oh5EvxL-HnGtesxAvtXX0vPTNYTPAFF1N2pA6OA1tuhBpAow7J",
        "expiraEn": 1761056254,
        "estatusCode": 200,
        "not-before-policy": 1761052654
    },
    "data": [
        {
            "identificador": null,
            "perfiles": "9",
            "nombre": null,
            "apellido": null,
            "id_localizacion_provincia": null,
            "id_localizacion_canton": null,
            "id_localizacion_parroquia": null,
            "estado_empleado": null,
            "mail_personal": null,
            "mail_institucional": null,
            "tipo_contrato": null,
            "estado_contrato": null,
            "identificador_op": "8400078047",
            "razon_social_op": "EDISON HERNAN  ESTUPIÑAN ",
            "nombre_representante_op": "EDISON HERNAN ",
            "apellido_representante_op": "ESTUPIÑAN ",
            "direccion_op": "TAYA ",
            "telefono_uno_op": "(02) 222-2222",
            "celular_uno_op": "(09) 8012-0542",
            "correo_op": "yuko.shisyo@gmail.com",
            "provincia_op": "Carchi",
            "canton_op": "Tulcán",
            "parroquia_op": "Urbina (Taya)",
            "identificador_fin": "8400078047",
            "correo_fin": "yuko.shisyo@gmail.com"
        }
    ]
}