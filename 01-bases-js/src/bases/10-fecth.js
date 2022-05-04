const apikey='8GyNhcnfezTmnUwRByaGWIvtyS1nB49b'
//https://api.giphy.com/v1/gifs/random?api_key=8GyNhcnfezTmnUwRByaGWIvtyS1nB49b
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
.then(resp=>resp.json())
.then(({data})=>{
    const{url}=data.images.original

    const img=document.createElement('img')  
    img.src=url
    document.body.append(img)

})

        
    
/*.then(resp =>{
    resp.json()
    .then(resp =>console.log(resp))
})*/
/*.then(resp=>{
    console.log(resp)
})*/