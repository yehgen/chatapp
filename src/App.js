import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">CHATTER!</span>
      </header>
      <footer className="footer">
        <input className="text-input"></input>
        <button className="send">↑</button>
      </footer>
    </div>
  );
}

export default App;
