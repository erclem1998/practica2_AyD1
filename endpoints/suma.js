module.exports=(app)=>{
    app.post('/suma',(req,res)=>{
        var a = req.body.a;
        var b = req.body.b;
        var resultado = a+b;
        if(a<5){
            res.send(a.toString());    
        }
        else if(a<3){
            res.send(a.toString());
        }
        else{
            res.send(resultado.toString());
        }
    })
}