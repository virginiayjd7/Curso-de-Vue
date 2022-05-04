
//import {owners}from './data/heroes'
//const[dc,marvel]=owners
//console.log(dc)
//console.log(marvel)

import superheroes from '../data/heroes'


//const getHeroById = superheroes.find(Element =>Element.id)
export const getHeroById=(id) =>superheroes.find(hero =>hero.id===id)

//console.log(getHeroById(2))

//const getHeroByOwner = superheroes.filter(superheroes =>superheroes.name)
 export const getHeroByOwner =(owner)=>superheroes.filter(hero =>hero.owner === owner)
//console.log(getHeroByOwner('Marvel'))

//console.log(superheroes)