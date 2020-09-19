module.exports=(app,connection)=>{
    app.post('/eliminar_usuario',(req,res)=>{
        connection.query(`delete from USUARIOPRACTICA where dpi=${parseInt(req.body.dpi)}`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send({message: "Se elimino con exito"})
            }
            else {
                res.status(404).send({message: "No se pudo eliminar"});
            }
        });
    });
}