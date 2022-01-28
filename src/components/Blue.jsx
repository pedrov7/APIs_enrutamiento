import react from "react";
import { Link } from '@reach/router'

const Blue = props => (
   
    <>
        <h3 style={{color: "blue"}}>The word is: Blue</h3>
        <Link to="/">Go to Main Page</Link>
    </>

);

export default Blue;