import React,{Component} from "react"

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state={
            seasons:["PSDSDSDsdsdd, DSDSAsdsdsddD ,SDAsdsdsdsdsSDSD, SDSD"]
        }


    }
    render(){
        return(
            <div>
                <h2> RenderizadoElementos</h2>
                <h3>Estaciones del tiempo</h3>
                <ul>
                    {
                        this.state.seasons.map((el)=>(
                        <li key={el}>{el}</li>)
                        )}
                </ul>
            </div>
        )
    }




}