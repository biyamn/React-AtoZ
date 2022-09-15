# 0915 - Todo App 만들기

# SPA란?

App.js를 변경하면 화면에 적용된다. 

public/index.html에서 title을 변경하면 화면의 title도 변경된다. 그리고 `<div id="root"></div>`를 지우면 화면이 사라지게 된다. 

src/index.js는 자바스크립트의 시작점인데, `const root = ReactDOM.createRoot(document.getElementById('root'));` 로 root id를 가진 div 엘리먼트를 잡아준다. 그래서 그 엘리먼트 안에서 화면을 꾸밀 수 있게 된다. 

원래는 a 페이지를 만들면 a.html을 만들고 b 페이지를 만들면 b.html도 만들어야 했다. (MPA - Multi Page Application)

하지만 요즘에는 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하는데 이를 SPA(Single Page Application)이라고 한다.

전통적인 웹 사이트는 a 페이지에서 b 페이지로 페이지 전환을 할 때 a.html을 보여주다가 b.html을 보여주면 됐다. 하지만 index.html밖에 없는 SPA에서는 어떻게 페이지 전환(브라우징)을 해줄까?

→ **HTML 5의 History API**를 사용해서 현재 페이지 내에서 화면 이동이 일어난 것처럼 작동하게 해준다. 

강의에서는 그냥 이러고 끝나는데.. 더 알아보자

# JSX 알아보기(Javascript syntax extension)

- JSX는 자바스크립트의 확장 문법이다.
- JSX를 작성하면 Babel이 아래처럼 자동적으로 변환해준다. → JSX는 createElement를 쉽게 사용하기 위해서 사용한다.
    
    ![%EC%BA%A1%EC%B2%98](https://user-images.githubusercontent.com/101965666/190503493-6dade9e1-62fa-46c0-8c6f-ac35ab59184b.png)

    
- 컴포넌트에 여러 엘리먼트 요소가 있다면 반드시 부모 요소 하나로 감싸줘야 한다.

---

# class형/함수형 컴포넌트

1. class형
    
    ```jsx
    import React, { Component } from "react";
    
    export default class App extends Component {
      render() {
        return (
          <div>
            안녕하세요.
          </div>
        )
      }
    }
    ```
    
    class형은 위와 같이 쓴다.
    
2. 함수형
    
    ```jsx
    import React from "react";
    
    function Component() {
        return (
          <div>
            안녕하세요.
          </div>
        )
      }
    }
    ```
    

---

# 틀 만들기

아래처럼 박스 안에 글자를 썼다. 그리고 CSS를 작성하여 아래와 같이 만들었다. 

```jsx
import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
        </div>
      </div>
    )
  }
}
```

# 목록 UI 만들기

같은 컴포넌트 안에 style을 만들어놓고 각 div와 button 등에 임포트하는 방식으로 UI를 만들었다. 

다만 button의 스타일은 btnStyle을 만들어놓고 

```
btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

<button style={this.btnStyle}>x</button>
```

이렇게 써서 스타일을 임포트했는데

목록 한 개를 감싸는 부분은 getStyle이라는 **함수**를 만들어놓고 임포트했다. 체크를 누르면 동적으로 가로선이 그어져야 하기 때문에 함수로 만들었다는데 이건 밑줄 아닌가..? 가로선이랑 뭔 상관이지..(—> 밑줄은 borderBottom 부분이고 가로선은 textDecoration 부분! 나중에 textDecoration을 none이 아닌 line-through로 변경할 거임)

```jsx
getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

<div style={this.getStyle()}>
```

그리고 this를 실제로 처음 사용해본다. 뭔지 모르겠다.. 

[https://ko.javascript.info/object-methods](https://ko.javascript.info/object-methods) → 이곳에서 공부하자! 잘 나와있음

---

# Map 메소드를 사용한 할 일 목록 나열

`map()` 예시

```jsx
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = array.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64]
```

이러한 map을 사용하여 미리 데이터를 만들고 이를 화면에 출력하는 코드를 짰다.

map을 이렇게 쓰는 경우는 처음이라서 지우고 혼자 다시 쳐봤다.

```jsx
todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    }
  ]

render() {
    return (
						{this.todoData.map((data) => (
						  <div style={this.getStyle()} key={data.id}>
						    <input type="checkbox" defaultChecked={false} />
						    {data.title}
						    <button style={this.btnStyle}>x</button>
						  </div>
						))}
)
```

---

# JSX Key 속성 이해하기

앞선 코드에서 div에 `key={data.id}`를 줬었다. 리액트에서는 리스트가 여러 개인데 나열을 해줄 때는 Key라는 것을 넣어줘야 한다고 한다. Key에는 객체의 유니크한 값을 넣어준다.(index는 비추천) ← 무슨 말인지? 언제 쓰는 건지 정확히 모르겠음

 Key를 지우면 페이지 콘솔에 `Warning: Each child in a list should have a unique "key" prop.`라는 경고가 뜬다!

### JSX Key 속성이란?

- 리액트에서 요소의 리스트를 나열할 때는 Key를 넣어줘야 한다.
- 키는 React가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 된다.
- 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 한다.

### Key는 요소의 변화를 알아차리기 위해 필요하다

→ 이부분 잘 이해가 안가서 DOM&VDOM 공부하고 다시 보기로 했다. 

아래의 타래에서 자세히 설명하고 있다. 이번주 블로그 주제는 DOM&VDOM&Key로 정했다…..!!!

[https://twitter.com/Basix1120/status/1570116486236352514](https://twitter.com/Basix1120/status/1570116486236352514)

---

# 가상 돔, 실제 돔 이해하기 (Q & A)

### 동작 원리

1. 버추얼돔은 간단하게 말하면 DOM을 흉내낸 JS 객체이다. 그냥 객체이므로 브라우저가 그려주는 DOM에 비해서 가볍다.
2. 그래서 가볍다는 특성을 활용해서 리액트는 컴포넌트를 그릴 때마다 실제 DOM노드를 반환하는 대신 Virtual DOM노드를 반환한다.
3. 변경된 사항이 있을 때는 이전에 만들어둔 Virtual DOM노드와 새로 그린 Virtual DOM노드를 비교해서 바뀐 점을 실제 DOM에 적용한다

```jsx
// JS 객체

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}
```

```jsx
// 실제 돔
<h1 title="foo" children="Hello" />
```

### 가상 돔에서 생긴 여러 번의 변화를 실제 돔에 한번에 적용한다는 것의 의미

1. 하나는 저번에 0님이 블로그에 써주셨던 것처럼 state 업데이트 여러 개가 한번에 적용된다는 뜻이구요
2. 다른 하나는 VDOM을 전부 그려두고 한번에 차이를 비교하고 적용하기 때문에 일일이 차이를 적용하는 방식과는 대비된다....그런 뜻입니다 

---

# Filter 메소드를 사용해서 할 일 목록 지우기

x버튼 클릭 이벤트 발생 시 지우는 함수를 호출하면 된다.

이때 사용할 함수가 filter()인데, **`filter()`**메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```jsx
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// ["exuberant", "destruction", "present"]
```

---

# React State

컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체이다. 

위에서 filter 함수를 적용했을 때 화면은 변하지 않은 것을 알 수 있다. 화면 상에서도 결과가 반영되게 하려면 state가 필요하다.

---

# 할 일 목록 추가하기

### input 태그에 입력이 가능하게 만들기

input의 value에는 input에 입력하는 값이 담긴다. value에 state를 만들고 넣어줘서 입력하는 값에 따라 바뀌도록 만들 것이다.

그리고 onChange 이벤트가 발생하면 이벤트 객체가 자동으로 만들어지는데, e.target.value가 입력하는 바로 그 글자이다. 따라서 e.target.value를 state로 만들 것이다

### 입력 버튼 클릭 시 목록에 추가하기 + 입력란에 있던 글씨 지워주기

form태그에 `onSubmit={this.handleSubmit}`를 써주고 handleSubmit 안에 `e.preventDefault();`를 작성해준다. 이는 submit 버튼이 눌려도 화면이 새로고침되지 않게 한다.

### 데이터 업데이트하기

현재까지 있던 Todo 데이터에 새로운 데이터인 newTodo 데이터를 추가한다.

```jsx
this.setState({ todoData: [...this.state.todoData, newTodo]})
```

---

# 전개 연산자

ECMAScript6(2015)에서 새롭게 추가되었으며, 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용한다. `...` 로 쓴다.

- 객체를 전개 연산자로 합치면 객체 자체가 아닌 객체 안의 요소가 합쳐진다.
- arr.reverse()와 같은 함수는 기존 배열 arr까지 역순으로 정렬되지만, […arr].reverse()는 원본 배열을 유지하며 arr는 변경되지 않는다.

---

# 마무리된 일 표시하기

체크를 했을 때만 글 중앙에 선을 그으려고 한다.

---

# 조건부 삼항 연산자

```jsx
if (a) {
	a = "a";
} else {
	a = "b";
}
```

```jsx
a ? a = "a" : a = "b";
```

위 두 코드는 같은 코드이다.