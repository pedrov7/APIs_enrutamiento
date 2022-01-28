import { Router, Link } from "@reach/router";
import './App.css';
import Hello from './components/Hello';
import Hola from './components/Hola';
import Four from "./components/4";
import Red from "./components/Red";
import Blue from "./components/Blue";

function App() {



  return (
    <div className="App">

      <h1>Select a link:</h1>

      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>

        <li>
          <Link to="hello">hello</Link>
        </li>

        <li>
          <Link to="4">Go to Four</Link>
        </li>

        <li>
          <Link to="/">Go to Main Page</Link>
        </li>
      </ul>





      <Router>
        <Hello path="home" />
        <Four path="4" />
        <Hola path="hello">
          <Red path="Red" />
          <Blue path="Blue" />
        </Hola>
      </Router>


    </div>
  );
}

export default App;
