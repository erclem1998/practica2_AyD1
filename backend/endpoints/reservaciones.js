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
    app.post('/actualizar_reservacion', (req, res) => {
        var {
            id_reservacion,
            num_habitaciones,
            fecha_entrada,
            fecha_salida,
            num_adultos,
            num_ninios,
            total,
            dpi,
        } = req.body
        connection.query(`update RESERVACION set num_habitaciones=${num_habitaciones}, fecha_entrada=STR_TO_DATE(REPLACE('${fecha_entrada}','/','.') ,GET_FORMAT(date,'EUR')), fecha_salida=STR_TO_DATE(REPLACE('${fecha_salida}','/','.') ,GET_FORMAT(date,'EUR')),num_adultos=${num_adultos},num_ninios=${num_ninios},total=${total}, dpi=${dpi} where id_reservacion=${id_reservacion}`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send({message: "Se actualizo correctamente la reservacion No. " + id_reservacion})
            }
            else {
                res.status(404).send({message: "Error al actualizar la reservacion No. " + id_reservacion})
            }
        });
    });
}