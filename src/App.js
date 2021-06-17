/*
  tech 함수의 매개변수에 {}로 전달된 정보 open 가능
  ex) function Tech({favourite})
*/
function Tech({ name, picture }) {
  return (
    <div>
      <h2>I learn {name}</h2>
      <img src={picture} />
    </div>
  );
}

const techILearn = [
  {
    name: "react",
    image: "https://reactjs.org/logo-og.png",
  },
  {
    name: "typescript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/600px-Typescript_logo_2020.svg.png",
  },
  {
    name: "nodejs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png",
  },
  {
    name: "es6",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "nestjs",
    image:
      "https://uchanlee.dev/static/3543625db47754c3e7645e0d3b892b14/0a47e/logo.png",
  },
];

function App() {
  return (
    // favourite라는 Property에 value를 담아 컴포넌트에 정보 전달
    <div className="App">
      <h1>Hello</h1>
      {techILearn.map((tech) => (
        <Tech name={tech.name} picture={tech.image} />
      ))}
    </div>
  );
}

export default App;
