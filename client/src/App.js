import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Anna's website! Work in progress.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/annabrunkhorst/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn while you wait.
        </a>
      </header>
    </div>
  );
}

export default App;
