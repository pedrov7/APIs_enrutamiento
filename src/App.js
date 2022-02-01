import { Router, Link } from "@reach/router";
import './App.css';
import Hello from "./components/Heello";
import Home from "./components/Home";

function App() {



  return (
    <div className="App">




      <Router>
        <Home path="/home"/>
        <Hello path="/:id/:color1/:color2"/>
        <Hello path="/:id"/>
      </Router>





      {/* <Router>
        <Hello path="home" />
        <Four path="4" />
        <Hola path="hello">
          <Red path="Red" />
          <Blue path="Blue" />
        </Hola>
      </Router> */}


    </div>
  );
}

export default App;
