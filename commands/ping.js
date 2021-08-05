module.exports = {
    slash: true,
    testOnly: true,
    description: 'A simple ping pong command',
    callback: ({ message }) => {
        if (message) {
         const axios = require('axios')
    axios
    //getting the image from the API
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
            console.log('RES:', res.data[0].url)
            message.reply(res.data[0].url)
           var A = res.data[0].url
        })
    }

    },
}