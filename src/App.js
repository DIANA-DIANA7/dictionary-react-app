
import './App.css';
import Dictionary from "./components/dictionary/Dictionary";



function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>
          <span>
            <i class="fa-solid fa-book-open" id="icon"></i>
          </span>
          Dictionary Project
        </h1>
      </header>

      <main className="app-main">
        <Dictionary default="success" />
      </main>

      <footer className="app-footer">
        Open Source on{" "}
        <a
          id="code"
          href="https://github.com/DIANA-DIANA7/dictionary-react-app"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
