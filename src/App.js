/*
  tech 함수의 매개변수에 {}로 전달된 정보 open 가능
  ex) function Tech({favourite})
*/
function Tech(props) {
  return (
    <h1>
      I love {props.favourite}, {props.something}
    </h1>
  );
}

function App() {
  return (
    // favourite라는 Property에 value를 담아 컴포넌트에 정보 전달
    <div className="App">
      <h1>Hello</h1>
      <Tech favourite="k8s" something={["hi"]} />
      <Tech favourite="react" />
      <Tech favourite="microservice" />
      <Tech favourite="aws" />
    </div>
  );
}

export default App;
