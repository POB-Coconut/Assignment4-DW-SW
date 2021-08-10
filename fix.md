### 세팅 관리

1. index.js App.js, Routes.js 분리
2. Routes.js Route 한 줄로
3. 컴포넌트 function 보단 화살표 함수. 함수를 전달할 일이 많기 때문에 화살표 함수를 더 사용한다.
4. 상대경로, 절대경로 지정. jsconfig.json
5. logo192.png , logo512.png 삭제

### searchForm 관련

1. <span hidden> 교체. input type="hidden" 으로
2. label htmlFor 교체 => 명시적으로 할꺼면 감싸지 말거나, 암시적으로 할꺼면 htmlFor 굳이 사용 하지 말것 일단 label도 없어서 고민해야 할듯.
   type=serach와 name을 보통 q로 하는건 이해됨. 하지만 name 까지 q로할 필요가 ?
3. serachForm에서 useFomr에 의해 state는 검색결과, 정렬기준를 반환함. 변수 명 searchInfo로 변경
4. LinkToFilter 지움. searchForm은 말 그대로 form. 그냥 result 페이지에 선언하면 된다.
   Result 페이지에 추가

### useForm 관련

1. useForm custom hook. handleSelector는 어디에 쓰는지 ? 사용하는 곳도 없음 삭제.
2. useForm의 역할은 검색 정보의 결과를 반환하고 라우터 이동을 하는 기능임. 굳이 useForm이란 함수명을 사용해야 하나? -> 보류
   정보 검색 결과 반환과 라우터의 기능을 분리 ? -> 보류 ( 영상 보고 판단 해보자 )
3. Result 페이지 보면 location.search를 구조화할당해 사용했음. 하나로 통일하자. 여기서 구조화할당 사용하기

### result 관련

1. Loading 컴포넌트 사용
2. loading 통일하기

### redux 관련

1. redux thunk 분리 -> saga로 변경하면서 폴더 나누기
2. selectBooks 삭제 -> Result 페이지 useSelector로 바로 가져올 수 있음.
3. api utils로 빼내기
4. constatns 상수화 처리
5. Status 상수화 처리
6. result status 관리
7. pagination dispatch 변수 설정

### filter 페이지

1. Filterings 상수 처리
2. gaps 들 상수 처리

#### 라우터 상수처리하기

#### img alt 작성하기

#### 로딩 컴포넌트 사용하기
