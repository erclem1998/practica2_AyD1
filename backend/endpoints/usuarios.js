module.exports=(app,connection)=>{
    app.post('/login', (req,res) => {
        let { username,passwd } = req.body;
        let sql = `SELECT * FROM USERPRACTICA`;
        connection.query(sql,function (err, rows, fields) {
            if (!err) {
                let log = false;
                for(let i=0; i<rows.length; i++){
                    if(rows[i].username == username && rows[i].passwd == passwd){
                        log=true;
                    }
                }
                if(log){
                    res.status(200).send(true);
                }else{
                    res.status(404).send(false);
                }
            }
            else {
                res.status(404).send('usuario no registrado');
            }
        });
    });
}