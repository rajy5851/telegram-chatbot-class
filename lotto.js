/*

1부터 45까지의 숫자 중, 6개를 '비복원 추출'한다.
> [1, 3, 5, 11, 25, 32]

# 비 복원 추출은 빼게 된다.

(힌트) lodash를 활용하면 간단히 가능하다.
lodash의 API를 둘러보아야 한다. 어떻게 생겼는지에 대해 안다.

*/

const _= require('lodash')

// 1. 1~45까지의 숫자가 담긴 통을 만든다.
// const numbers = [1, 2, 3, ... ,45]를 하지 않는다. 바보같이 다 쓰지 않는다.
// 프로그래밍을 배우는 것이다. 활용할 수 있어야 한다. 응용할 수 있어야 한다.

// 2. 6개를 랜덤으로 뽑는다.

// const foods = ['피자', '타고벨', '장어', '치킨']

// console.log(_.sample(foods))

/*
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15,
             16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
             31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45
];

*/

const numbers = _.range(1, 46)

const winner = [1, 15, 19, 23, 28, 42]

const lotto = _.sortBy(_.sampleSize(_.range(1, 46)))

const getLotto = function() {
    const winner = [1, 15, 19, 23, 28, 42]
    const lotto = _.sortBy(_.sampleSize(_.range(1, 46), 6))

    const cnt = _.intersection(lotto, winner).length

    let rank = ''
    if (cnt == 6) {
        rank = '1등 입니다.'
    } else if (cnt == 5) {
        rank = '3등 입니다.'
    } else if (cnt == 4) {
        rank = '4등 입니다.'
    } else if (cnt == 3) {
        rank = '5등 입니다.'
    } else {
        rank = '꽝입니다.'
    }

    console.log(cnt + ', ' + rank)



}


// 깔끔하게 코드를 사용한다.
// 예쁘게 탭핑해준다.

// let cnt = 0

/*
Winner와 lotto를 비교하여, 몇 개가 일치하는지, 몇 등인지 출력한다.
> 6, 1등
6개가 매칭이 되어야 한다.
// 2등은 5개가 매칭이 되고 보너스가 1개가 있으면 매칭이 된다.
> 5, 3등
5개가 매칭이 되어야 한다.
> 4, 4등
4개가 매칭이 되어야 한다.
> 3, 5등
3개가 매칭이 되어야 한다.

*/

/*
let rank = ''
if (cnt == 6) {
    rank = '1등 입니다.'
} else if (cnt == 5) {
    rank = '3등 입니다.'
} else if (cnt == 4) {
    rank = '4등 입니다.'
} else if (cnt == 3) {
    rank = '5등 입니다.'
} else {
    rank = '꽝입니다.'
}

console.log(cnt + ', ' + rank)
*/

/* 10000번을 돌려서 5등이 몇 번 나오는지 */

let n = 0
while (n < 10000) {
    getLotto()
}



// const

// let cnt = 0
// 알고리즘 문제를 풀 때는 cnt라고 표시한다.

// lotto.forEach(function(num) {
//     if (winner.includes(num)) {
//         cnt += 1;
//     }
// })

const cnt = _.intersection(lotto, winner).length

// 두개의 코드를 만든다.

// _.intersection()
// intersection 교집합이라고 말한다. 교차로





/*
function greet(greeting, punctuation) {
    retrun greeting + ' ' + this.user + punctuation;
}

var object = { 'user': '1st',
               'user2' : '2nd',
               'user3' : '3rd',
               'user4' : '3th',
               'user5' : '4th',
               'user6' : '5th'
};

var bound = _.bind(greet, object, '등');
bound('!');

var bound = _.bind(greet, object, _, '!');
bound('등');
*/

// 10000번을 돌려서 5등이 몇 번 나오는지 알아본다.
// 로또를 사지 않는 것이다.

/*
1. _.sortBy(_.sampleSize(numbers, 6))
2. console.log_.sortBy(_.sampleSize(numbers, 6))

일단 무엇이라도 해보아야 한다. 일단 시도해보아야 한다. 도전해야 한다.
무엇이라도 시도해보아야 한다. Try it해보아야 한다. 해보아야 한다.
핵심을 먼저 만들고 그 다음에 그 외의 것을 붙여야 한다. 살을 붙여나가야 한다.

*/

console.log([1, 2, 3, 4, 5].includes(8))

console.log(_.intersection([1, 2, 3, 4], [3, 4, 5, 6]))


// console.log(_.sortBy(_.sampleSize(numbers, 6)))



// console.log(_.sampleSize(numbers, 6))
// API를 찾아보아야 한다. 확인해보고 찾아보아야 한다.
// sampleSize를 찾아본다.
// 1, 46(45미만으로 한다. 그러므로 45까지 한다.)


/*

//

(힌트)
1. 설명
코드

2. 설명
코드


*/





// > [1, 3, 5, 11, 25, 32]

// _.nth(array, 1);