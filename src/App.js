import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [count, setCount] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <div className="list">
        <button
          onClick={() => {
            let copy = [...title];
            copy[0] = "여자 코트 추천";
            setTitle(copy);
          }}>
          버튼
        </button>
        <button
          onClick={() => {
            let copy = [...title];
            copy.sort();
            setTitle(copy);
          }}>
          정렬 버튼
        </button>
        <button
          onClick={() => {
            setModal(!modal);
          }}>
          modal
        </button>
        {modal === true ? <Modal></Modal> : null}
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
