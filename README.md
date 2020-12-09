# movie app 2019

[ReactJS로 영화 웹 서비스 만들기(2019 업데이트 버전)](https://nomadcoders.co/react-fundamentals) 수강하며 만든 영화앱


## 20201209
- 부모 컴포넌트(App)에서 dynamic data저장하는 state가지고 있음. 
- 데이터 가져오는 비동기 함수 실행 후, 자식 컴포넌트(Movie)에 props로 넘겨준다
- 비동기 동작이 끝날때까지 기다리라고 말해주는 키워드 async, await
---
- ~~state가 필요없으면 class componenet일 필요가 없다~~
    + react hook
- ```<img title="">``` title 속성은 이미지에 마우스 가져갔을 때 툴팁이 뜸
    +alt : 대체 정보, title :보충 정보
- JSX 는 javascript 임. 
    + js의 class 와 이름이 겹치므로  clssName으로 사용
    + ```<label for="">``` 속성의 경우 htmlFor로 써야함
---


### gh-pages로 배포하기
1. ```npm install gh-pages```
2. package.json에 ```"homepage" : "http://{깃헙아이디}.github.io/{프로젝트이름}"```
3. package.json "scripts"에 스크립트 추가
    - ```"deploy" : "gh-pages -d build"``` : build 디렉토리로 gh-pages 실행. build폴더를 업로드함
    - ```"predeploy" : "npm run build"``` : npm run deploy 하면 deploy실행 전 npm 이 해당 스크립트를 실행한다(deploy부분 이름이 같아야한다)
4. ```npm run deploy``` 실행하면 파일 빌드 후 업로드 됨! (터미널에서 published 문구 확인할 수 있다)
5. {깃헙아이디}.github.io/{프로젝트이름} 으로 이동하여 결과물을 볼 수 있다(시간이 걸림)

- npm run build : build파일 생성 스크립트
- public 폴더 index.html을 수정하여 \<title\>을 바꿀 수 있다, 수정 후에는 npm run deploy 한 번 더 실행해야 함

---
### 더 해볼 것
- 다른 api찾고 연결하는 거 연습하기
- react hooks
- react native