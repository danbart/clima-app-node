const axios = require("axios");


const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
       
    
    if ( resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay Resultados para la ciudad ${direccion}`);
    }
    
    let location = resp.data.results[0];
        
        // console.log('Dirección: ', location.formatted_address);
        // console.log('Lat: ', location.geometry.location.lat);
        // console.log('Long', location.geometry.location.lng);

    return { direccion: location.formatted_address, lat: location.geometry.location.lat, lng: location.geometry.location.lng };

}

module.exports = {
    getLugarLatLng
}



