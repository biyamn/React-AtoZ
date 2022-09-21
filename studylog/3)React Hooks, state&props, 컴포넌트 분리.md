# 0921 - React Hooks, state&props, 컴포넌트 분리

# React Hooks

### React Hooks란?

React Hooks는 ReactConf 2018에서 발표된 `class 없이 state를 사용할 수 있는 새로운 기능`이다. 

- 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능
- useState와 useEffect를 사용하여 state와 lifecycle과 같은 기능을 사용 가능하게 해준다.

### React Hooks가 필요한 이유

리액트 컴포넌트

1. Class Component
    - 더 많은 기능 제공
    - 더 긴 코드 양
    - 더  복잡한 코드
    - 더딘 성능
2. Functional Component
    - 더 적은 기능 제공
    - 짧은 코드 양
    - 더 심플한 코드
    - 더 빠른 성능
    - 더 나은 가독성

함수형 컴포넌트에서 더 적은 기능을 제공한다는데 어떤 기능을 클래스 컴포넌트에 비해서 쓰지 못한다는 걸까?

→ **리액트의 생명주기!**

→ **하지만 리액트 훅스의 useState와 useEffect를 통해서 해결!**

### Hooks의 이점

1. 일반 클래스 컴포넌트보다 React Hooks를 사용했을 때 코드가 훨씬 간결해진다.

![%EC%BA%A1%EC%B2%98](https://user-images.githubusercontent.com/101965666/191549305-561dd5a6-69ab-414c-aa94-509cae3ef3f9.png)

![%EC%BA%A1%EC%B2%98 1](https://user-images.githubusercontent.com/101965666/191549320-9a651995-2b5f-430b-8031-86054da22471.png)

이유는 클래스 컴포넌트에서는 생명주기를 이용할 때 componentDidMount와 ComponentDidUpdate 그리고 componentWillUnmount를 모두 다르게 처리해주지만 리액트 훅을 사용할 때는 `useEffect` 안에서 다 처리해줄 수 있기 때문이다.

1. HOC 컴포넌트를 Custom React Hooks로 대체해서 너무나 많은 Wrapper 컴포넌트를 줄일 수 있다.

- **HOC**(Higher Order Component)(고차 컴포넌트)란?
    - 화면에서 재사용 가능한 로직만을 분리해서 component로 만들고, 재사용 불가능한 UI와 같은 다른 부분들을 parameter로 받아서 처리하는 방법
    - 컴포넌트 로직을 재사용하기 위해 사용되고 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수.
    - 즉, 컴포넌트를 취하여 새로운 컴포넌트를 반환하는 함수
    - [https://jeonghwan-kim.github.io/2022/05/28/react-high-order-component](https://jeonghwan-kim.github.io/2022/05/28/react-high-order-component)
    

하지만 실제로 사용하는 예제는 정확하게 이해하지 못했다……

# To-Do 앱을 클래스 컴포넌트에서 함수형 컴포넌트로 바꾸기

- this.state.todoData → todoData로 바꿔준다.
- this.setState({todoData: newTodoData}) → setTodoData(newTodoData)로 바꿔준다.
- handleCompleteChange 등의 함수를 const handleCompleteChange 이렇게 지정해준다.
    - btnStyle과 같은 변수 앞에도 써준다.
- this 없애기

### 강의와 별 관련은 없지만 알게된 것

- 이 파일을 다른 곳에서도 쓰려면 export 해줘야 하는데, 함수나 클래스 이름 앞에 붙여도 되고 마지막에 export default 이름 이렇게 해도 된다.
- [https://pinokio0702.tistory.com/370](https://pinokio0702.tistory.com/370)

# state와 props

- state
    1. 부모 컴포넌트 → 자녀 컴포넌트가 아닌 하나의 컴포넌트 내부에서 데이터를 전달할 때 사용함
    2. (예) 검색 창에 글을 입력할 때 내용이 변하는 것은 state로 바꿈
    3. state는 변경 가능하다
    4. state가 변하면 re-render된다
- props
    1. 부모 컴포넌트 → 자녀 컴포넌트로 데이터를 전달할 때 사용함
    2. props는 읽기 전용(변경 불가능)이며, 바꾸고자 하면 부모 컴포넌트에서 state를 변경해줘야 함

# 할 일 목록 부분을 위한 컴포넌트 생성하기

기존에는 App.js에 모든 소스코드를 넣어놨다. 

하지만 아래와 같이 나눌 것인데, 나누게 되면 첫 번째로 재사용이 가능해지고 두번째로 코드가 간결해져 읽기 쉬워진다.

![%EC%BA%A1%EC%B2%98 2](https://user-images.githubusercontent.com/101965666/191549325-b8060e9c-4de7-41d4-8827-336879e7ee5b.png)

* 깨알 꿀팁!

rsc를 누르면 함수형 컴포넌트 틀이 만들어진다

## 1. List 컴포넌트 생성하기

List 컴포넌트를 만들 것이다. App.js에서 리스트를 만드는 부분을 List.js에 잘라내어 붙여넣어주자.

### state인 todoData를 props로 내려주기

그리고 todoData가 필요한데, 이건 App.js에서도 필요하므로 App.js에서 props로 내려줄 것이다. 

App.js에 아래와 같이 선언하고, 

```
<List todoData={todoData}/>
```

List.js에서는 컴포넌트의 인자로 props를 받고 쓸 때는 props.todoData를 쓰면 된다.

*여기서 궁금했던 점! 분명히 todoData를 넘겨주었는데 todoData를 쓸 때 왜 todoData가 아닌 props.todoData라고 쓸까?

- console.log(props)를 했을 때 왜인지 화면이 무한 로딩돼서 확인 못함..

*인자로 props가 아닌 { todoData }를 넘겨주면 todoData를 쓸 때 props.를 안붙여줘도 됨!

아래의 두 표현은 같은데, 두 번째를 사용하여 더욱 분명하게 표현할 수 있다.

```jsx
function List (props) {
}
```

```jsx
function List ({ todoData }) {
}
```