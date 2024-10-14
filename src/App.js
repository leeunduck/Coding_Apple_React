import "./App.css";

function App() {
  let color = "red";
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그</div>
        <div className={color}>빨간색</div>
      </div>
    </div>
  );
}

export default App;
