import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lê Quang Điệp</h1>
      </header>
    </div>
  );
}

export default App;