module.exports=(app,connection)=>{
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