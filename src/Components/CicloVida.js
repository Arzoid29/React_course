import React,{Component}from "react"




class Reloj extends Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        console.log(3,"Se elimino el  componente ")
    }


    render(){
        return<h3>{this.props.hora}</h3>
    }
} 
export default class CicloVida extends Component{
    constructor(props){
        super(props)
        console.log(0, "Inicio de componente no dom")

        this.state={
            hora:new Date().toLocaleTimeString(),
            visible:false
        }
    this.temporizador= null
    }


    componentDidMount(){
        console.log(1,"Ya esta en el dom")
    }
    componentDidUpdate(prevProps,prevState){
        console.log(2, "El estado se actualizo")
        console.log(prevProps,prevState)
    }


  
    tictac=()=>{
        this.temporizador=setInterval(() => {
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar=()=>{
        this.tictac()
        this.setState({
            visible:true
        })
        

        

    }


    detener=()=>{
        clearInterval(this.temporizador)
        this.setState({
            visible:false
        })
    }


    render(){
        console.log(4,)
        return(
            <>
            <h2>Ciclo vida </h2>
           {this.state.visible &&<Reloj hora={this.state.hora}/>}
            <button onClick={this.iniciar}>INICIAR </button>
            <button onClick={this.detener}>DETENER</button>
            </>
        )
    }


}