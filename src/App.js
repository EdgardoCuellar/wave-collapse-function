import MainBlock from './component/MainBlock';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <MainBlock N={15} ></MainBlock>
      </div>
    </div>
  );
}

export default App;
