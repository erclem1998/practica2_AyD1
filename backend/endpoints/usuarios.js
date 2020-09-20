module.exports = (app, connection) => {
    app.put('/users', (req, res) => {
        console.log(req.body)
        var sql = `UPDATE USERPRACTICA SET ? WHERE dpi = ?`;
        connection.query(sql, [req.body, req.body.dpi], function (err, rows, fields) {
            if (!err) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rows);
            }
            else {
                console.log(err)
                status.statusCode = 404;
                res.send(status);
            }
        });
    });
    app.post('/eliminar_usuario',(req,res)=>{
        connection.query(`delete from USERPRACTICA where dpi=${parseInt(req.body.dpi)}`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send({message: "Se elimino con exito"})
            }
            else {
                res.status(404).send({message: "No se pudo eliminar"});
            }
        });
    });
}