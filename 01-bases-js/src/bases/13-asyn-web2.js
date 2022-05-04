import giphyApi from './bases/11-axios'

const getImage=async() => {

    try {
        //tambie con if

     const { data } =(await giphyApi.get('/random')).data
     const { url } = data.images.original

     const img = document.createElement('img')
          img.src= url //TODO:URL
          document.body.append( img)

        
    } catch (error) {
        console.log('error en la peticio',error)
        throw error
    }

}

getImage()