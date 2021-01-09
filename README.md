# 코드 짜기 전에 풀 먼저 하고 합시다

# 2021-react-native-project
 
 ## 프로젝트 켜기
 1. 프론트엔드 켜기
 ```
 npm start
 ```
 2. 서버 켜기   
 기존 콘솔말고 새 콘솔 추가해서
 ```
 node ./backFotmob/server.js
 ```
## 1. 리액트 네이티브 세팅 (expo)
-Expo CLI 설치
```
npm install -g expo-cli
```

-Expo 프로젝트 실행
```
cd 프로젝트 디렉토리
npm start
또는 expo start
```
프로젝트가 실행되면서 자동으로 expo dev tool 웹페이지가 열림.

웹, 안드로이드 시뮬레이터, ios 시뮬레이터로 실행 가능. (현재 버전에서 웹으로는 동작안함)   
윈도우에서는 ios 시뮬레이터 설치 불가. 안드로이드 시뮬레이터 설치하고 연결하거나 자신의 폰에 연결.

폰에 expo 앱 설치 후 QR코드를 찍으면 자신의 폰에서도 프로젝트 실행 가능.

깃에 사용된 모듈이 같이 올라가 있어서 따로 모듈 설치는 안해도 될 듯.


## 2. 노드 js

인터넷에 nodejs검색 
안정화 버전설치

## 3. mysql 설치
mysql모듈 ==> npm install -S mysql
아파치 같이 깔고 싶으면 bitnami검색 후 설치
아파치 필요 없으면 그냥 mysql설치 

~터미널에서 쓰이는 명령어들~
--mysql -u root -p DB접속
--CREATE DATABASE FOTMOB2; db선택
--USE FOTMOB2
--show databases
