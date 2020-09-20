module.exports = (app, connection) => {
    //var a = require('./examen.json');
    var r={
        statusCode:200
    }
    app.post('/crear_servicio', (req, res) => {
        connection.query(`insert into SERVICIO(nombre_servicio,descripcion,precio,capacidad_personas) 
        values ('${req.body.nombre_servicio}','${req.body.descripcion}','${req.body.precio}','${parseInt(req.body.capacidad_personas)}')`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send(r);
            }
            else {
                r.statusCode=404;
                res.status(404).send(r);
            }
        });
    })
}