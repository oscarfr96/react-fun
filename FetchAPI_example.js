//Store our apiKey
const apiKey = 'MHNZ2mggwbsfajgE2wM5ZuzONXgPkJMU';
//Petition to giphy using our apiKey
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        //Here is the random img that giphy give to you
        const {url} = data.images.original;
        //Creaste an image object to show the random gif
        const img = document.createElement('img');
        //Source of the image object
        img.src = url;

        document.body.append(img);
    })
    //Catch an error if happens
    .catch(console.warn);
