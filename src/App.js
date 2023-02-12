import { useState } from "react";
import "./App.css";

function App() {
  let [list, setList] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  const [title, setTitle] = useState(0);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

      {list.map(function (a, i) {
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
                setTitle(i);
              }}>
              {list[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let del = [...list];
                del.splice(i, 1);
                setList(del);
              }}>
              삭제
            </button>
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
      <div>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}></input>
        <button
          onClick={() => {
            let copy = [...list];
            copy.unshift(input);
            setList(copy);
          }}>
          글 추가
        </button>
      </div>
      {modal === true ? (
        <Modal list={list} setList={setList} title={title} />
      ) : null}
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
      <h4>{props.list[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
