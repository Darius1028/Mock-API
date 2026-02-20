let contador = 0

export default function handler(req, res, endpoint) {
    const nameParameter = req.query.name
   
    if (nameParameter === 'verificacion') {
        res.status(200).json(verificacion)
        return
    }
   
    if (nameParameter === 'facturado') {
        res.status(200).json(facturado)
        return
    }
    
    if (!nameParameter) {
        const respuesta = contador % 2 === 0 ? verificacion : facturado
        contador++
        res.status(200).json(respuesta)
        return
    }
   
    // Caso por defecto si no coincide ningún parámetro
    res.status(400).json({
        error: "Parámetro inválido",
        mensaje: "Use 'verificacion' o 'facturado' como parámetro"
    })
}



const facturado = {
    "estado": "exito",
    "mensaje": "Consulta ejecutada satisfactoriamente",
    "cuerpo": [
        {
            "numero_factura": "034-001-000268267",
            "ruta_orden_pago": "https://mock-api-one-eosin.vercel.app/api/reporteOrden",
            "ruta_factura": "https://mock-api-one-eosin.vercel.app/api/factura",
            "estado": "facturado"
        }
    ]
}

const verificacion = {
    "estado": "exito",
    "mensaje": "Consulta ejecutada satisfactoriamente",
    "cuerpo": [
        {
            "numero_factura": null,
            "ruta_orden_pago": "https://guia.agrocalidad.gob.ec/agrodb/aplicaciones/financiero/documentos/ordenPago/2026/02/09/ReporteOrden_1790319857001_2026-02-09_14_54_668.pdf",
            "ruta_factura": null,
            "estado": "anuladoFacturacion"
        }
    ]
}