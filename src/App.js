
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Dictionary Project</h1>
      </header>

      <main className="app-main"><Dictionary default="rain"/></main>
      
      <footer className="app-footer">Coded by Diana M. Open Source on <a href="https://github.com/DIANA-DIANA7/dictionary-react-app">GitHub</a> Hosted on Netlify</footer>
    </div>
  );
}

export default App;
