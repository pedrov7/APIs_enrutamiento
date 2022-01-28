import react from "react";
import { Link } from '@reach/router'

const Hola = props => (

    <>
        <h4>The word is: hello</h4>
        <br/>
        <Link to="Blue">Blue Color</Link>
        <br/>
        <Link to="Red">Red Color</Link>
        <br/>
        <Link to="/">Link to main</Link>


        {props.children}
    </>
);

export default Hola;