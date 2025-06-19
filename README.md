# AEL Lab homepage (v2)

2025년 6월에 새로 만든 랩 홈페이지입니다. 

## 로컬에서 실행하기
`npm start` to run the app in the development mode.\


## Deploy하기 
1. 이 repository에 `git push`로 새로운 내용 업데이트 하기 
2. ssh로 ael 서버에 접속하기 
    - `ssh ael@ael.kaist.ac.kr` (암호는 기존과 같음. 모르면 따로 물어보세요)
3. ssh안에서 ael_v2폴더에 접근하기
    - `cd /var/www/html/ael_v2`
4. 이 repository를 가져와서 서버 업데이트하기 
    - `git pull`
5. 빌드하기 
    - `npm run build`
6. 웹사이트에 접속해서 잘 업데이트되었는지 확인하기
