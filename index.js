/*const op=require('./ejercicio1')
const opcion ='poten';

op.suma(5,10)
op.restas(20,15)
op.multipli(8,7)
op.divisiones(12,4)
op.poten(5,2)
op.rad(25)

console.log(op)


if(opcion=="suma"){

    op.suma(5,10)
}
else if (opcion=="restas"){

    op.restas(20,15)
}
    else if (opcion=="multipli"){
        op.multipli(8,7)
        
}

else if (opcion=="divisiones"){

    op.divisiones(12,4)

}
else if (opcion=="poten"){

    op.poten(6,2)

}

else{
    op.rad(25)

    
}*/

//1. Requerir modulo http 
const http=require('http')

//funcion callback 
function handleServer(req,res){
    res.writeHead(404,{"Content-type":'text-html'})

    res.write('<h1> Esta es la repuesta del servidor</h1>')
    res.end()
}
const server=http.createServer(handleServer).listen(5000)
