import { useState } from "react";
import "./App.css";

function App() {
  let [list, setList] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
        <button
          onClick={() => {
            let copy = [...list];
            copy.sort();
            setList(copy);
          }}>
          sort
        </button>
      </div>
      <div className="list">
        <h4>
          {list[0]}
          <button
            onClick={() => {
              setCount(count + 1);
            }}>
            👍
          </button>
          {count}
        </h4>
        <button
          onClick={() => {
            let copy = [...list];
            copy[0] = "여자 코트 추천";
            setList(copy);
          }}>
          change
        </button>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{list[1]}</h4>
        <button
          onClick={() => {
            let copy = [...list];
            copy[1] = "신촌 우동 맛집";
            setList(copy);
          }}>
          change
        </button>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{list[2]}</h4>
        <button
          onClick={() => {
            let copy = [...list];
            copy[2] = "js";
            setList(copy);
          }}>
          change
        </button>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
