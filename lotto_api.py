# import requests
import requests

# 
# requests는 패키지를 깔아야 한다.
# $pip install requests를 한다. get 요청 host 요청
# 

# axios.get

url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1'

res = requests.get(url)

# requests.get()

# json을 python dictionary로 파싱한다.
data = res.json()

num1 = data['drwtNo1']
num1 = data['drwtNo1']
num1 = data['drwtNo1']
num1 = data['drwtNo1']
num1 = data['drwtNo1']
num1 = data['drwtNo1']

winner = []

for i in range(1, 7):
    print(i)

for i in range(1, 7):
    print


# 

# js의 push와 거의 동일하다.
winner.append(data['drwtNo1'])
winner.append(data['drwtNo2'])
winner.append(data['drwtNo3'])
winner.append(data['drwtNo4'])
winner.append(data['drwtNo5'])
winner.append(data['drwtNo6'])

# 소스 코드를 신속하게 입력해주어야 한다.
# 신속하게 입력해주어야 한다.

print(winner)
# key 1, 2, 3, 4, 5
