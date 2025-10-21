import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  // Ruta absoluta del archivo PDF
  const filePath = path.join(process.cwd(), 'src', 'processors', 'reporteOrden.pdf')

  // Verificamos que exista
  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: 'Archivo no encontrado' })
    return
  }

  // Cabeceras HTTP para mostrar el PDF en el navegador
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'inline; filename="reporteOrden.pdf"')

  // Leemos el archivo y lo enviamos como stream
  const fileStream = fs.createReadStream(filePath)
  fileStream.pipe(res)
}
