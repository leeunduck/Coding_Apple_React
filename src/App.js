import { useState } from "react";
import "./App.css";

function App() {
  let [list, setList] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

      {list.map(function (title, i) {
        return (
          <div className="list" key={i}>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i] = copy[i] + 1;
                setCount(copy);
              }}>
              count
            </button>
            <div>
              <span>👍</span>
              {count[i]}
            </div>
            <h4>{title}</h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setModal(!modal);
        }}>
        모달
      </button>
      <button
        onClick={() => {
          let copy = [...list]; //["남자 코트 추천","강남 우동 맛집","파이썬독학",]
          copy.sort(); //["강남 우동 맛집","남자 코트 추천","파이썬독학",]
          setList(copy); //["강남 우동 맛집","남자 코트 추천","파이썬독학",]
        }}>
        sort
      </button>
      {modal === true ? <Modal /> : null}
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
