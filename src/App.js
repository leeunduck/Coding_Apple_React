import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <div className="list">
        <button
          onClick={() => {
            setTitle(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
          }}>
          버튼
        </button>
        <h4>
          {title[0]}{" "}
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
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
