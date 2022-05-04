const person = {
    name:'yaneth',
    age:45,
    codename:'aquino',
    //power:'jiid'
}
const { age,name,codename, power='noo'} = person
/*console.log(person.name)
console.log(person.age)
console.log(person.codename)
console.log(person.power)*/

//onst createhero = ( person ) => {
    const createhero = ( {name,age,codename,power}) =>// {
        
    //return
   ( {
        id:123,
        name,
        age,
        codename,
        power,
    })
//}
console.log( createhero(person))