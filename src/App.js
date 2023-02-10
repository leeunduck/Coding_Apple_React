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
                let copy = [...count]; // [0, 0, 0]
                copy[i] = copy[i] + 1; // [0[0] + 1], [0[1] + 1], [0[2] + 1]
                setCount(copy);
              }}>
              count
            </button>
            <div>
              <span>👍</span>
              {count[i]}
            </div>
            <h4
              onClick={() => {
                setModal(!modal);
              }}>
              {title}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          let copy = [...list]; //["남자 코트 추천","강남 우동 맛집","파이썬독학",]
          copy.sort(); //["강남 우동 맛집","남자 코트 추천","파이썬독학",]
          setList(copy); //["강남 우동 맛집","남자 코트 추천","파이썬독학",]
        }}>
        sort
      </button>
      {modal === true ? <Modal list={list} setList={setList} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <button
        onClick={() => {
          let copy = [...props.list];
          copy[0] = "여자코트 추천";
          props.setList(copy);
        }}>
        글수정
      </button>
      <h4>{props.list[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
