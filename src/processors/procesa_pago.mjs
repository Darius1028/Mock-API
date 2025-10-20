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
            "ruta_orden_pago": "https://guia.agrocalidad.gob.ec/agrodb/aplicaciones/financiero/documentos/ordenPago/2025/10/16/ReporteOrden_3040018396_2025-10-16_14_20_866.pdf",
            "ruta_factura": "https://guia.agrocalidad.gob.ec/agrodb/aplicaciones/financiero/documentos/facturas/2025/10/17/1710202501176818883000120340010002682670000000814.pdf",
            "estado": "facturado"
        }
    ]
}

const verificacion = {
    "method": "POST",
    "queryData": {},
    "response": {
        "status": "200",
        "type": "json",
        "data": "{ \"estado\": \"exito\", \"mensaje\": \"Consulta ejecutada satisfactoriamente\", \"cuerpo\": [ { \"numero_factura\": \"034-001-000091917\", \"ruta_orden_pago\": \"https://pruebasguia.agrocalidad.gob.ec/agrodbPrueba/aplicaciones/financiero/documentos/ordenPago/2025/10/14/ReporteOrden_1718050709001_2025-10-14_10_58_48.pdf\", \"ruta_factura\": \"https://pruebasguia.agrocalidad.gob.ec/agrodbPrueba/aplicaciones/financiero/documentos/facturas/2025/10/14/1410202501176818883000110340010000919170000000116.pdf\", \"estado\": \"verificacion\" } ] }"
    }
}