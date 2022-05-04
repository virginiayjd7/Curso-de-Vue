/*const miPromesa =()=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('tenemo de un valor en la promesa')

        },1000);
    })
}*/
const miPromesa =()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('tenemo de un valor en la promesa')
            reject('reject en mi promesa')

        },1000);
    })
}
 const medirtiempoAsync = async()=>{
     try{

        console.log('Inicio')
        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('Fin')
    
        return'errr medirtiempo'

     }catch(error){
         //return 'cath en mdrietiempoasyn'
         throw 'cath en mdrietiempoasyn'
     }


 }
 medirtiempoAsync()
 .then(valor => console.log('then exitoso',valor))
 .catch(err => console.log('erro:',err))

/*console.log('Inicio')
await miPromesa()
miPromesa().then(console.log)
console.log('Fin')*/