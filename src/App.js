import { useState } from "react";
import "./App.css";

function App() {
  let [writeHeader, b] = useState("남자 코트 추천");
  let posts = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{writeHeader}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
