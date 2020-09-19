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

    app.post('/crear_user', (req,res) => {
        let { dpi,username,passwd,correo,edad } = req.body;
        let sql = `INSERT INTO USERPRACTICA(dpi,username,passwd,correo,edad) VALUES(?,?,?,?,?)`;
        let data = [dpi,username,passwd,correo,edad]
        try {
            connection.query(sql, data, function (err, rows, fields) {
                if (!err) {
                    res.status(200).send({"msg":"usuario creado"});
                }
                else {
                    res.status(200).send({"msg":"usuario ya registrado"});
                }
            });
        } catch (error) {
            res.status(404).send({"msg":"error en creacion"});
        }
    });
}