import random

# range(1, 46)

# function getLotto() {
# }

def getLotto():
    winner = [1, 15, 19, 23, 28, 42]

    lotto = sorted(random.sample(range(1, 46), 6))

    cnt = len(set(winner) & set(lotto))

# winner = [1, 15, 19, 23, 28, 42, 1]
# random.sample([], 몇개 뽑을지)

# random배열과 승리배열이다.

# lotto = random.sample(range(1, 46), 6)

# lotto = sorted(random.sample(range(1, 46), 6))

# set(배열) #>> 집합(중복원소 제거, 집합 연산자)

# set(lotto) 

# print(lotto)

# print(set([1,2,3,4,4,3,2,1]))

# print(set(winner) & set(lotto))

# print(set([1,2,3,4]) & set([2,3,4]))

# Python에서는 집합이라고 말한다.
# 앰퍼샌드라고 하는 교집합을 말하는 것이다. 인터셉터

# print(set(winner) & set(lotto))

# cnt = len(set(winner) & set(lotto))


# """
#  if (boolean) {
#  } else if () {
#  }
# """

# Java Script 언어일 때 사용한다.

# inventing을 할 때 사용 => 들여쓰기가 중요하다. 인덴팅을 한다.

# One Tap을 해준다. 두 번 탭

# Python 조건문을 검색해보아도 많이 나온다.

# 6, 1등
# 5, 3등
# 4, 4등
# 3, 5등

# 직접 한 번 해보아야 한다. 여러분이 직접 한 번 해보시기 바랍니다.

# """
# if boolean:
#     # 실행할 코드
# elif:
#     # 실행할 코드
# """

    rank = ''
    if cnt == 6:
        rank = '1등'
    elif cnt == 5:
        rank = '3등'
    elif cnt == 4:
        rank = '4등'
    elif cnt == 3:
        rank = '5등'
    else:
        rank = '꽝'

    print(f'{cnt}, {rank}')

# n = 0
# while(n<1000) {
# 
# }

# 괄호 없이 사용해도 가능하다.

n = 0
while n < 100:
# 반복할 코드
    getLotto()
    n +=1 

# 조건문으로 입력한다.
# 반복문으로 작성해본다.


# length라는 객체를 사용하면 무엇을 사용하든 길이를 세어준다.