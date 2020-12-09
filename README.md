# movie app 2019

[ReactJS로 영화 웹 서비스 만들기(2019 업데이트 버전)](https://nomadcoders.co/react-fundamentals) 수강하며 만든 영화앱


#### 20201209
- 부모 컴포넌트(App)에서 dynamic data저장하는 state가지고 있음. 
- 데이터 가져오는 비동기 함수 실행 후, 자식 컴포넌트(Movie)에 props로 넘겨준다
- 비동기 동작이 끝날때까지 기다리라고 말해주는 키워드 async, await

- state가 필요없으면 class componenet일 필요가 없다
- ```<img title="">``` title 속성은 이미지에 마우스 가져갔을 때 툴팁이 뜸
    +alt : 대체 정보, title :보충 정보
- JSX 는 javascript 임. 
    + js의 class 와 이름이 겹치므로  clssName으로 사용
    + ```<label for="">``` 속성의 경우 htmlFor로 써야함