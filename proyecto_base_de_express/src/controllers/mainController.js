// Acá nos falta nuestra fuente de datos
const data = [
    {


    }
]
// Acá nos falta un objeto literal con las acciones para cada ruta
const controller = {
    home: (req, res) => res.render('home', data),
    detalle: (req, res) => res.render('detalle', data)
}
// Acá exportamos el resultado

module.exports = controller