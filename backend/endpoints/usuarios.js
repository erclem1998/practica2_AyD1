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
    app.post('/login', (req,res) => {
        let { username,passwd } = req.body;
        let sql = `SELECT * FROM USERPRACTICA`;
        connection.query(sql,function (err, rows, fields) {
            if (!err) {
                let log = false;
                let encontrado = false;
                for(let i=0; i<rows.length; i++){
                    if(rows[i].username == username){
                        encontrado=true;
                        if(rows[i].passwd == passwd){
                            log=true;
                        }
                    }
                }
                if(encontrado){
                    if(log){
                        res.status(200).send({"msg":'login correcto'});
                    }else{
                        res.status(200).send({"msg":'passwd incorrecto'});
                    }
                }else{
                    res.status(404).send({"msg":'username no registrado'});    
                }
            }
            else {
                res.status(404).send({"msg":'usuario no registrado'});
            }
        });
    });
}