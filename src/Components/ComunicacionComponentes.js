import React,{Component}from "react"

export default class Padre extends Component{
    state ={
        contador:0,
    }

    incrementarContador=(e)=>{
        this.setState({
            contaqdor: this.state.contador +1
        })
        
    }




    render(){
        return(
            <>
            <h2>Comunica</h2>
            <Hijo incrementarContador={this.incrementarContador} mensaje="jsndsd"/>
            </>
        )
    }
}

function Hijo(props){
    return(
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarContador}>+</button>
        </>)
}