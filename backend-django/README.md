# Django 벡엔드 서버 시작하기

## 0. 가상환경 설정

### 가상환경 설치

```bash
$ python -m venv <venv-name>
```

### 가상환경 활성화

```bash
$ source <venv-name>/bin/activate
```

> 가상환경의 PIP에 Django를 추가해 설치한다.

## 1. Django 시작하기

### 1. Django 프로젝트 생성

```bash
$ django-admin startproject <project-name>
```

### 2. Django 시작

```bash
$ python manage.py runserver <port-number = 8080>
```

### 3. Django 초기 설정

#### 3-1. Setting 설정

> <project-name>/settings.py

```python
...
ALLOWED_HOSTS = ['*']

...
LANGUAGE_CODE = 'ko-KR'

...
TIME_ZONE = 'Asia/Seoul'
```

#### 3-2. SECRET_KEY 별도 저장

> `settings.py`의 SECRET_KEY를 별도 저장
>
> 원출처: "MemoLOG" https://ca.ramel.be/67

1. 프로젝트 외부에 secrets.json을 생성

```json
// secret_key.json
{
  "SECRET_KEY": "<SECRET_KEY value>"
}
```

2. setttings.py에서 불러오기

```python
# setting.py 

# secret_key is in a secret place! Be safe!
import json, os
from django.core.exceptions import ImproperlyConfigured 

secret_file = os.path.join(BASE_DIR, 'secret_key.json') 

with open(secret_file) as f: 
    secrets = json.loads(f.read()) 
    def get_secret(setting, secrets=secrets): 
        try: 
            return secrets[setting] 
        except KeyError: 
            error_msg = "Set the {0} environment variable".format(setting) 
            raise ImproperlyConfigured(error_msg) 
            
SECRET_KEY = get_secret("SECRET_KEY")
```

3. `.gitignore에 해당파일 추가`



## 2. Django-MySQL 연동하기

### 1. 테이블 만들기

```bash
# MySQL Server 실행
$ mysql.server start

# MySQL 실행; -u: user_id | -p: password, 빈칸으로 둔 뒤 입력 가능
$ mysql -u <user_id> -p <blank or password>
```

```sql
# DB 생성
mysql> create database <DATABASE_NAME> character set utf8mb4 collate utf8mb4_general_ci;

# 생성된 DB 확인
mysql> show databases;

# DB 선택
mysql> use <DATABASE_NAME>;
```
