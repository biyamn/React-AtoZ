# 0922 -

# 구조 분해 할당(Destructring 비구조화 할당)

## 구조 분해 할당이란? (ES6)

배열이나 객체의 속성을 해체하여 그 값을 **개별 변수**에 담을 수 있게 하는 Javascript 표현식

## 구조 분해 할당을 쓰는 이유는?

Clean Code를 위해서!!

## 구조 분해 예시

아래의 첫번째 함수를 두번째 함수로 구조 분해 할당을 통해 표현할 수 있다.

```jsx
let animalData = {
  accessory: 'horn',
  animal: 'horse',
  color: 'purple',
  hairType: 'curly'
}

function buildAnimal(animalData) {
  let accessory = animalData.accessory,
      animal = animalData.animal,
      color = animalData.color,
      hairType = animalData.haitType;
}

function buildAnimal(animalData) {
  let {accessory, animal, color, hairType} = animalData;
}
```

아래와 같이 스프레드 연산자와 같이 표현할 수도 있다.

```jsx
let a, b, rest;
[a, b] = [10, 20];

console.log(a)
// 10

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// [30, 40, 50]
```

쉼표로 각각의 자리를 구분할 수 도 있다.

```jsx
const numbers = [1, 2, 3, 4, 5, 6];

const [,,three,,five] = numbers;

console.log(three)
// 3
```

firstName을 fName으로도 칭할 수 있게 해주는 코드이다. 만약에 fName이 존재하지 않으면 ‘not given’을 출력하고, 있으면 그 값을 출력해준다.

```jsx
const studentDetails = {
  firstName: 'John',
  lastName: 'Mary'
}

const {firstName: fName='not given', lastName} = studentDetails;

console.log(fName);
// "John"
console.log(lastName);
// "Mary"
```

아래와 같이 for of 문에서도 사용할 수 있다.

```jsx
let people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (let {name: n, family: {father: f}} of people) {
  console.log("Name: "+n+" Father: "+ f);
}
// "Name: Mike Smith Father: Harry Smith"
// "Name: Tom Jones Father: Richard Jones"
```

여기서 for of 문법을 잘 모르겠어서 찾아봤다. 파이썬에서 for in 과 비슷한 문법인 것 같다.

```jsx
const myArr = ['미카엘', '가브리엘', '라파엘'];

for (let angel of myArr) {
    console.log(angel)
}
// 미카엘
// 가브리엘
// 라파엘
```

# Form 부분을 위한 컴포넌트 생성하기

Form이 있던 자리에 아래처럼 적어주고 Form.js에 Form 태그와 그 안에 있는 내용을 잘라서 붙여 넣어 주었다. handleSubmit라는 함수를 props로 넘겨주었고, state와 setState인 value, setValue도 넘겨주었다. 

```
<Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
```

근데 같은 함수인 handleChange는 Form.js에 잘라내어 붙여 넣어줬는데 왜 handleSubmit는 그러지 않고 props로 넘겨준 것일까?

# TailWindCSS 소개

- TailWindCSS란
    
    HTML 안에서 CSS 스타일을 만들 수 있게 해주는 CSS 프레임워크.
    
- CSS 프레임워크란
    
    레이아웃 및 여러 컴포넌트 구성, 브라우저 호환성을 보장하는데 소요되는 **시간을 최소화**하기 위해 여러 웹 개발/디자인 프로젝트에 적용할 수 있는 CSS 파일 모음. 더 빠르게 애플리케이션을 스타일링 하는데 도움을 준다.
    
- React JS의 CSS Framework 종류
    - Material UI
    - React Bootstrap
    - Semantic UI
    - Ant Design
    - Materialize
- Tailwind CSS의 장점
    - Tailwind CSS는 부트스트랩과 비슷하게 m-1, flex와 같이 미리 세팅된 Utility Class를 활용하는 방식으로 HTML에서 스타일링을 할 수 있다.
    - 그래서 빠른 스타일링 작업이 가능하다
    - **class 혹은 id명을 작성하기 위한 고생을 하지 않아도 된다.**
    - 유틸리티 클래스가 익숙해지는 시간이 필요할 수 있지만 IntelliSense 플로그인이 제공돼서 금방 익숙해질 수 있다.
- [Tailwind CSS 살펴보기](https://tailwindcss.com/)
- Tailwind Extention을 설치하자~~~ visual studio code에서!
- 리액트에서 쓸 수 있도록 Tailwind 내려받기
    1. npm install -D tailwindcss (설치)
    2. npx tailwindcss init (Tailwind config파일 생성)
    3. content: ["./src/**/*.{html,js}"], (config 파일의 content 부분 이렇게 변경하기)
    4. 메인 CSS 파일에 다음을 추가해주기. App.css에 추가해줬다. 
        
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        

# TailWindCSS로 앱 스타일링 해주기

1. 원래 스타일링을 지워준다. 
2. TailWindCSS로 앱 스타일링을 해준다.

## 🤯오류 발생!!!

아니 App.js에 있는 tailwind는 적용이 되는데 components/Form.js에 있는 tailwind는 적용이 안되는 것임..

문제는 src 아래에 **을 써야 하는데 디코에서 마크다운이 잘못 적용되어 **가 없어진 상태를 config 파일에 적어줘서 생긴 문제였음(이전에 디코로 다른 분이 준 config 파일 내용을 복붙한 경력이 있음)

```jsx
// tailwind.config.js
/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# Drag and Drop 기능 추가하기

## Drag and Drop 기능 구현 순서

1. HTML 드래그 앤 드롭 API를 사용하여 원하는 목록을 드래그 가능하게 만든다.
2. 사용자가 드래그를 할 때 적절한 애니메이션을 준다.
3. 사용자가 드래그를 멈췄는지 확인한다. 그리고 여기에도 애니메이션을 준다.
4. 클라이언트가 목록을 재정렬한 경우 항목의 위치를 새 항목으로 업데이트한다.

→ 이것을 쉽게 구현할 수 있게 도와주는 모듈이 `react-beautiful-dnd`임 

## 필요 모듈 설치하기

`npm install react-beautiful-dnd --save`

## 임포트하기

`import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd'`

## 동작 원리

![캡처.PNG](0922%20-%207960e3db90634d3b8cd447bf1fd1bdc6/%25EC%25BA%25A1%25EC%25B2%2598.png)

## [splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경함

# 리액트 불변성 지키기

## 리액트 불변성이란?

값이나 상태를 변경할 수 없는 것

## 자바스크립트 타입을 통한 불변성 의미 살펴보기

![캡처.PNG](0922%20-%207960e3db90634d3b8cd447bf1fd1bdc6/%25EC%25BA%25A1%25EC%25B2%2598%201.png)

1. **원시 타입**: Boolean, String, Number, null, undefined, Symbol(**불변성을 가지고 있다**)
    - 고정된 크기로 Call Stack 메모리에 저장, 실제 데이터가 변수에 할당
    - 아래는 username walter를 john으로 대체한 것이 아닌 메모리 영역 a에 있는 walter라는 값을 그대로 두고 메모리 영역 b에 john을 새로 할당한 것 → **이렇게 불변성을 가지고 있기 때문에 리액트에서 불변성을 위해 따로 신경 써주지 않아도 됨**
    
    ```jsx
    let username = 'walter';
    username = 'john';
    ```
    
2. 참조 타입: Object, Array
    - 데이터 크기가 정해지지 않고 Call Stack 메모리에 저장, 데이터의 값이 heap에 저장되며 변수에 heap 메모리의 주소값이 할당
    - 배열에 대한 요소를 추가하거나 객체 속성 값을 변경할 때 Call Stack의 참조 ID는 동일하게 유지되고 Heap 메모리에서만 변경됨 → **이렇게 불변성이 유지되지 않기 때문에 리액트에서 따로 신경을 써줘야 함**
    
    ```jsx
    let array = ['1', '2', '3']
    array = ['4', '5', '6']
    ```
    

## 불변성을 지켜야 하는 이유

1. 참조 타입에서 객체나 배열의 값이 변할 때 원본 데이터가 변경되어 이 원본 데이터를 참조하고 있는 다른 객체에서 예상치 못한 오류가 발생할 수 있어 프로그래밍의 복잡도가 올라감
2. 리액트에서 화면을 업데이트할 때 불변성을 지켜서 값을 이전 값과 비교해서 변경된 사항을 확인한 후 업데이트하기 때문에 불변성을 지켜야 함

## 불변성을 지키는 방법

참조 타입에서는 값을 바꿨을 때 Call Stack 주소 값은 같은데 Heap 메모리 값만 바꿔주기에 불변성을 유지할 수 없었으므로 아예 새로운 배열을 반환하는 메소드를 사용하면 된다.

- 원본 데이터를 변경하는 메소드 → splice, push
- 원본 데이터를 변경하지 않고 새로운 배열을 반환하는 메소드 → spread operator, map, filter, slice, reduce

```jsx
const array = [1, 2, 3, 4];
const sameArray = array;
sameArray.push(5);
console.log(array === sameArray); // true

const array = [1, 2, 3, 4];
const differentArray = [...array, 5];
console.log(array === differentArray); // false
```

# React.memo를 이용한 컴포넌트 렌더링 최적화

현재 Todo 앱에서 App, Lists, List, Form 이렇게 네 컴포넌트로 나눈 것은 재사용성을 위해서도 있지만 **각 컴포넌트의 렌더링의 최적화**를 위해서 이기도 하다.

(예) Form에서 글을 타이핑할 때 원래 Form 컴포넌트와 그 State 값을 가지고 있는 App 컴포넌트만 렌더링이 돼야 하는데 현재는 그렇지 않음.(각 컴포넌트에 콘솔을 찍어서 확인 가능)

## React.memo 사용

- React.memo 적용은 간단하게 원하는 컴포넌트를 React.memo로 감싸주기만 하면 된다.

```jsx
const Lists = React.memo(({ todoData, 
```