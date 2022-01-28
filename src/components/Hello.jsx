import react from "react";
import { Link } from '@reach/router'

const Hello = props => (
        <>
    <h1>Welcome</h1>
    <br/>
    <Link to = "/">Return to Main</Link>
    </>
   )

export default Hello;