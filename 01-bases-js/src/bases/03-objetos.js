const persona={
nombre:'yaneth',
apellido:'hhhdhdh',
edad: '25',
direccion:{
    ciudad:'new york',
    zip:55222,
    lat:1452,
    lng:344,
}

}
const persona2 ={...persona};///para cambiar ...el nombre
persona2.nombre='yaneth'

console.log(persona)
console.log(persona2)