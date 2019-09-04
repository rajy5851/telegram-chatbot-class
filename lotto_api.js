/*

axious를 활용하여
https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1
요청을 보내,

1등 번호 6개가 담긴 winner 배열을 만들어 출력하세요.

> [1, 15, 19, 23, 28, 42]
*/

const axios = require('axios')

url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1'
axios.get(url)
    .then((res) => {
        let winner = []

        for (let i = 0; i < 6; i++) {
            winner.push(res.data[`drwtNo${1+i}`])
        }
      
        /*
        winner.push(res.data.drwtNo1)
        winner.push(res.data.drwtNo2)
        winner.push(res.data.drwtNo3)
        winner.push(res.data.drwtNo4)
        winner.push(res.data.drwtNo5)
        winner.push(res.data.drwtNo6)
        // 무식한 방법이다. 조건문을 활용해야 한다.
        // 반복문을 활용한다. 사용해보아야 한다.
        */

        // console.log(res.data.drwtNo2)
        console.log(winner)
    })