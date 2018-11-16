# 헤커톤 - 소세지(sosezi)

## 2018-11-16

## 참여자
- [조민지](https://github.com/minji2687)
- [심소영](https://github.com/bbgrams)
- [안세나](https://github.com/sena-a)

## 서버
[Glitch 서버](https://groovy-smile.glitch.me/)

## 프로젝트명
My Mad Pet Diary

## 주제
반려동물 메모 게시판

## 기능
1. 내 프로필 등록
1. 반려동물 등록
    - 반려동물별 프로필 등록

## 데이터

[데이터 설명](https://docs.google.com/spreadsheets/d/1mFCjcB3l78jv1032z_Vd4xC_CXVxMaaW2AYhNxYAVyQ/edit?usp=sharing)

```json
{
  "users": [
    {
      "id": 1,
      "username": "fds"
    }
  ],
  "babys": [
    {
      "id": 1,
      "userId": 1,
      "name": "애기",
      "imgUrl": "https://cdn.glitch.com/e255d7ab-b36c-4d2d-8f00-437b3f8ae69c%2Fbearb_PUSHEAD.jpeg?1542280550102"
    }
  ],
  "infos": [
    {
      "id": 1,
      "babyId": 1,
      "age": "1",
      "birth": "2017/11/11",
      "gender": "female",
      "animal": "rabbit",
      "favorite": "seed"
    }
  ],
  "comments": [
    {
      "id": 1,
      "userId": 2,
      "babyId": 1,
      "body": "도움이 되는 글이네요!"
    },
    {
      "id": 2,
      "userId": 1,
      "babyId": 3,
      "body": "잘 봤습니다!"
    }
  ]
}
```
