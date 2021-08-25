import React from "react";
import PropTypes from "prop-types";
export default function Propioedades(props){
    return(
        <div>
            <h2>
                {props.porDefecto}
            </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"sdsdsd":"sdjd"}</li>
                
            </ul>
        </div>
    );
}

Propioedades.defaultProps ={
    porDefecto:"Las props"


}
Propioedades.protoTypes = {
    numero:PropTypes.number, 
};