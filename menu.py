import random
# const _ = require('lodash')

# random이라는 친구를 가지고 온다.

# const를 Python에서는 import라고 한다.

# const foods = ['피자', '타고벨', '장어', '치킨']
foods = ['피자', '타고벨', '장어', '치킨']

# console.log(_.sample(foods))
print(random.choice(foods))

matzip = {'백운봉 막국수' : '이베리코 돼지고기',
          '고갯마루' : '닭볶음탕',
          '대우식당' : '부대찌개'
}

# matzip.고갯마루 (X)
# matzip['고갯마루']

print(matzip['고갯마루'])
print(random.choice(matzip))

# 배열이란 비슷한데 dictionary에서 Key Value로 접근하게 된다.
# Python의 삼분의 일을 배운다. 고갯마루



# object를 나타내는 형태로 나타내준다.
# key:value 타입으로 한다


# 사전처럼 생긴 것이다.
# 백운봉 막국수는 고기 파는 집, 고갯마루는 닭볶음탕이 맛있다. 대우식당은 부대찌개 파는 집이다.

# random.choice(foods)
# 내장된 함수에서 강력한 함수들이 많이 있다.

# JSON을 지원해준다.
# JSON을 Key Value Pair를 지원해준다.
# NoSQL을 데이터화 한 것이 MongoDB이다.
