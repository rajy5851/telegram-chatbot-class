import requests
from decouple import config

chat_id = ''
text = ''
base_url = 'https://api.telegram.org'
token = config('TOKEN')

## print(token, 'token')
# token

# url = f'{base}/bot{token}/getUpdates'
url = f'{base_url}/bot{token}/getUpdates'

# res = requests.get(url)

# res = requests.get(url)
print(res, json(url)


print(len(data[])

chat_id = (data['result'][0]['message']['chat']['id'])

# 여러 개가 있다.
for result in data['result']:
    print(result)


text = 'python으로 보내는 메세지'

url = f'{base_url}/bot{token}/sendMessage?chat_id'


# 보물찾기 같다.
# 배열에서 괄호를 잘 보아야 한다.
# 어레이 값을 보아야 한다. 순서가 중요하다. 위치가 중요하다.

# 위치가 중요하다.

# 파싱을 해준다.

# 기호를 잘 보아야 한다.
# update_id'
# 기호를 잘 보아야 한다. 리스트를 본다 배열이다.
# 핵심을 보아야 한다.
# 기초를 잘 보아야 한다. 들어야 한다.


print(res, 'res', url, 'url')

print(url)

url_two = 'https://api.telegram.org/bot830206322:AAH_YExJj80Z4khgzK2Jd36PDugNMAG7uys/sendMessage?chat_id=880211447&text=Sing_a_song'



# key들은 공개키에 공개하면 안된다.
# Github에 올리면 안된다.
# 열쇠를 다 보여주면 안된다.
# 공개하면 안된다. 보안에 문제가 생길 수 있다.
# Python에서는 .env로 만들어준다.


# """
# getUpdates 요청을 통해 받아온 응답에서 id를 뽑아내어
# sendMessage를 통해 메세지 보내기

# 1. 한 사람에게만 보내기(첫번째로 메세지 보낸사람)
# 2. 나에게 메세지 보낸 모든 사람에게 보내기

# """