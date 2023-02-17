import logo from './logo.svg';
import './App.css';

function App() {
  let src = "https://www.youtube.com/watch?v=yOoUyj-3XK0&list=RDyOoUyj-3XK0&start_radio=1";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lê Quang Điệp</h1>
        <a href={src} target="_blank">Welcom to youtube</a>
      </header>
    </div>
  );
}

export default App;
