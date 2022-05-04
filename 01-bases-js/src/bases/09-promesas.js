/*console.log('inicio')/////peticoones al servidor 

new Promise((resolve, reject)=>{

    console.log('cuerspo prodem')
    //resolve ('premesa resule')
    reject ('premesa error')

}).then( console.log)
.catch(console.log)

console.log('fin')*/
import{getHeroById} from './bases/08-imp.exp'
const getHeroIdAsync=(id)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            const hero=getHeroById(id)
            if(hero){
                resolve(hero)

            }else{
                reject('no existe')
            }
            resolve(hero)
        },1000);

    });
}

getHeroIdAsync(2)
//.then(h=>console.log(h))
.then(h=>
    console.log(`el heroe es :${h.name}`))
.catch(console.log)