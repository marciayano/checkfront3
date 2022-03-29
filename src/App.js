import About from "./components/About";
import Header from "./components/Header";
import Hobby from "./components/Hobby";
import Projects from "./components/Projects";
import Social from "./components/Social";

import './styles.css'

function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Projects/>
    <Hobby/>
    <Social/>
    </div>
  );
}

export default App;
