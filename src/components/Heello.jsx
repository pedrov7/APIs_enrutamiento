import React, { useRef } from "react";
import { Link } from '@reach/router';


const Hello = props => {

    // const contenedor=useRef();

    const llegaColor1 = props.color1;

    const llegaColor2 = props.color2;

    const llegaPalabra = props.id;

    return (
        <div>


            <div style={{ color: llegaColor1, backgroundColor: llegaColor2 }}>
                {isNaN(llegaPalabra) ? <h4>The Word is: {llegaPalabra}</h4> : <h4>The number is: {llegaPalabra}</h4>}
            </div>

            <br />
                <Link to="/">Return to Main</Link>  
        </div>

        // {isNaN(props.param) ?The World is: ${props.param} :
        //    El número es: ${props.param}}

    )
}

export default Hello