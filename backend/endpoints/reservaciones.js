module.exports=(app,connection)=>{
    app.get('/ver_reservaciones',(req,res)=>{
        connection.query(`select * from RESERVACION`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send(rows)
            }
            else {
                res.status(404).send(err);
            }
        });
    });

    app.delete('/eliminar_reservacion',(req,res)=>{
        connection.query(`delete from RESERVACION where id_reservacion=${parseInt(req.query.id_reservacion)}`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send(rows)
            }
            else {
                res.status(404).send(err);
            }
        });
    });
}