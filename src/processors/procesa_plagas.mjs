let contador = 0

export default function handler(req, res) {
    
   

    return res.status(200).json(informacion_plagas)
  
   

}

const informacion_plagas = {
  "estado": "exito",
  "mensaje": "Registro de plagas exitoso!"
}