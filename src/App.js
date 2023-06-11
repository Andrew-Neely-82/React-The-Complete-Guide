import { Navbar, Course, Footer } from "./components/export.js";
import Expenses from "./components/section3/Expenses";
import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Course />
        <Expenses />
      </div>
      <Footer />
    </>
  );
};

export default App;
