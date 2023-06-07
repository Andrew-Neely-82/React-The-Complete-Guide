import { Navbar, Footer } from "./components/export.js";
import { Classes } from "./components/lectures/export.js";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Classes />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
