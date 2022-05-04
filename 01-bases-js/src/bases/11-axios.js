import axios from "axios";

const apiKey="8GyNhcnfezTmnUwRByaGWIvtyS1nB49b"

const giphyApi= axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
     apiKey:apiKey
    }
})

/*giphyApi.get('/random')
.then(resp=>{
       console.log(resp.data.data.images.original.url)
       const url = resp.data.data.images.original.url
       
       const img = document.createElement('img')
       img.src= url //TODO:URL
       document.body.append( img)

       
    } )*/

    giphyApi.get('/random')
    .then(resp=>{
          const{data} = resp.data
          const{url} = data.images.original
          console.log(data)
     
          const img = document.createElement('img')
          img.src= url //TODO:URL
          document.body.append( img)
   
           
        } )