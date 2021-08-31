import React, {Component} from "react"
export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador: 0,
        };
        this.sumar =this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }
    sumar(e){
        console.log("sumando")
        console.log(this)
        this.setState({
            contador:this.state.contador +1,
        })
    }
    restar(e){
        console.log("restando")
        console.log(this)
        this.setState({
            contador:this.state.contador -1,
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                    
                </nav>
                <h3>{this.state.contador}</h3>
            </div>


        )
    }
} 

export class EventosES7 extends Component{
   
        state={
            contador: 0,
        };
        
    
    sumar=(e)=>{
        console.log("sumando")
        console.log(this)
        this.setState({
            contador:this.state.contador +1,
        })
    }
    restar=(e)=> {
        console.log("restando")
        console.log(this)
        this.setState({
            contador:this.state.contador -1,
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                    
                </nav>
                <h3>{this.state.contador}</h3>
            </div>


        )
    }
} 


export class MasSobreEventos extends Component{
    handleClick =(e)=>{
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)

    }
    render(){
        return(
            <div>
                <h2>
                    Mas sobre eventos
                </h2>
                <button onClick={this.handleClick}> Saludar</button>
            </div>
        )
    }
}