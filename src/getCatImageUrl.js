const fetch = require('node-fetch');

async function getCatImageUrl() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await response.json();

    console.log(json);

    return json[0].url;
}

module.exports = getCatImageUrl