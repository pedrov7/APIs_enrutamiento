import React from "react";
import { Link } from '@reach/router'

const Red = (props) => {
    return(
    <>
        <h3 style={{color: "red"}}>The word is: Red</h3>
        <Link to="/">Go to Main Page</Link>

    </>

)
};
 export default Red;

