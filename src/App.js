import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그</div>
        <div>{post}</div>
      </div>
    </div>
  );
}

export default App;
