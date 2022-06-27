
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Dictionary Project</h1>
      </header>

      <main className="app-main"><Dictionary default="rain"/></main>
      
      <footer className="app-footer">Open Source on <a href="https://github.com/DIANA-DIANA7/dictionary-react-app">GitHub</a></footer>
    </div>
  );
}

export default App;
