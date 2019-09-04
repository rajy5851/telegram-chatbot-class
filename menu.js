
const _ = require('lodash')
// 언더스퀘어를 쓸 때 lodash를 사용한다.

const foods = ['피자', '타고벨', '장어', '치킨']

console.log(_.sample(foods))

// param collection -- collection을 뽑아내준다. 추출한다.
// 