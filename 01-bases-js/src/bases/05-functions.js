//function saludar (xyz){
//    return `hola ${xyz}`
//}
//const saludar = (xyz)=>{
 //   return `hola ${xyz}`
//}
const saludar = ( nombre= 'peter' ) =>`hola ${nombre}`
//const nombre = "yaneth"
//
/*const getUser = () => { 
   return{
    uid:'BC123',
    username:'tony001'
   } 
}*/
const getUser = () => ({ 
    uid:'BC123',
    username:'tony001' })

//console.log( saludar(nombre))
const heroes =[{
    id:1,
    name:'batman'
},{
    id: 2,
    name:'superman'
}]
//const existe=heroes.some((heroe) =>heroe.id===2 );
const{name} = heroes.find((heroe) =>heroe.id===1 );
//console.log( getUser())
console.log(name)