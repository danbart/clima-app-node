const axios = require("axios");


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=1722dfd89588945dbd627aba2f26ceae`);


    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay Resultados para la ciudad ${direccion}`);
    // }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}