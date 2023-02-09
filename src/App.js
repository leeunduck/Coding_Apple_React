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
      <Modal></Modal>
      <div className="black-nav">
        <div>React blog</div>
        <button
          onClick={() => {
            let copy = [...list]; //["남자 코트 추천","강남 우동 맛집","파이썬독학",]
            copy.sort(); //["강남 우동 맛집","남자 코트 추천","파이썬독학",]
            setList(copy); //["강남 우동 맛집","남자 코트 추천","파이썬독학",]
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
            let copy = [...list]; //["남자 코트 추천","강남 우동 맛집","파이썬독학",]
            copy[0] = "여자 코트 추천"; //["여자 코트 추천","강남 우동 맛집","파이썬독학",]
            setList(copy); //["여자 코트 추천","강남 우동 맛집","파이썬독학",]
          }}>
          change
        </button>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{list[1]}</h4>
        <button
          onClick={() => {
            let copy = [...list]; //["남자 코트 추천","강남 우동 맛집","파이썬독학",]
            copy[1] = "신촌 우동 맛집"; //["남자 코트 추천","신촌 우동 맛집","파이썬독학",]
            setList(copy); //["남자 코트 추천","신촌 우동 맛집","파이썬독학",]
          }}>
          change
        </button>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{list[2]}</h4>
        <button
          onClick={() => {
            let copy = [...list]; //["남자 코트 추천","강남 우동 맛집","파이썬독학",]
            copy[2] = "js"; //["남자 코트 추천","강남 우동 맛집","js",]
            setList(copy); //["남자 코트 추천","강남 우동 맛집","js",]
          }}>
          change
        </button>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
