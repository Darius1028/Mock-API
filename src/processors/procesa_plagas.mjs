let contador = 0

export default function handler(req, res, endpoint) {
    const nombreComuPlaga = req.body && req.body.nombreComuPlaga
   
    if (nombreComuPlaga) {
        res.status(200).json(informacion_plagas)
        return
    }
   

    // Caso por defecto si no coincide ningún parámetro
    res.status(400).json({
        error: "Parámetro inválido",
        mensaje: "Envíe en el body el campo 'nombreComuPlaga' (p. ej.: 'verificacion')"
    })
}

const informacion_plagas = {
    "estado": "exito",
    "data": [
        {
          "nombreComuPlaga": "cochinilla de los cítricos",
          "nombreCientificoPlaga": "Dysmicoccus sp. nr. texensis"
        },
        {
          "nombreComuPlaga": "cochinilla harinosa del mango",
          "nombreCientificoPlaga": "Dysmicoccus brevipes"
        },
        {
          "nombreComuPlaga": "cochinilla algodonosa de la piña",
          "nombreCientificoPlaga": "Dysmicoccus neobrevipes"
        },
        {
          "nombreComuPlaga": "cochinilla de la vid",
          "nombreCientificoPlaga": "Planococcus ficus"
        },
        {
          "nombreComuPlaga": "cochinilla algodonosa del café",
          "nombreCientificoPlaga": "Planococcus citri"
        }
      ]
}

