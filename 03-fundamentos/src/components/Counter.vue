<template>
    <h2>{{ customTitle }}</h2>
    <p> {{counter}}<sup>2</sup>={{squareCounter}} </p>
    <p data-testid="counter">{{counter}}</p>

<div class="buttons-container">
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
</div>

</template>

<script>
export default {
props:{
    title:String,
    start: {
        type:Number,
        default:100,
        //required:true
        validator(value){
            return value >=0
        }
    }
    },
    //name:'patito'
data() {
    return {
        counter:this.start
    }
},
methods: {
    getSquareValue(){
       return  this.counter * this.counter
    },
    increase(){
       this.counter ++  
},
    decrease(){
       this.counter -- 
}
  

},
computed:{
    squareCounter(){
        //console.log('computer squareCounter')
         return  this.counter * this.counter
    },
    customTitle(){
       
        //return  this.title ? this.title:'Counter'
        return  this.title ||'Counter' /// expect(h2.text()).toBe('Counter!') AHI TAMBIEN VA 
    }

    }

}
</script>
<style>
button{
background-color: rgb(48, 212, 158);
border-radius: 5px;
border: 1px solid white;
color: white;
cursor: pointer;
margin: 0 5px;
padding: 5px 15px;
transition: 0.3s ease-in-out;
}
button:hover{
background-color: rgb(59, 209, 209);
transition:0.3s ease-in-out ;

}
</style>