import { useState } from "react";
import "./App.css";

function App() {
  let [cloth, setCloth] = useState("남자 코트 추천");
  let [list, setList] = useState("강남 우동 맛집");
  let [python, setPython] = useState("파이썬독학");
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <div className="list">
        <h4>
          {cloth}{" "}
          <span
            onClick={() => {
              setCount(count + 1);
            }}>
            👍
          </span>{" "}
          {count}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{list}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{python}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
