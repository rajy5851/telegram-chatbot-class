const axios = require('axios')

const text = `this is a message`
const url = `https://api.telegram.org/bot830206322:AAH_YExJj80Z4khgzK2Jd36PDugNMAG7uys/sendMessage?chat_id=880211447&text=${thank_you_so}`

/*
sendMessage?chat_id=830206322&text=이건 자바스크립트가 보내준 메시지이다.
const

bot<token>/sendMessage

telegram.js

node telegram.js이다.
*/

axios.get(url)
    .then(res => {
        console.log(res)
    })