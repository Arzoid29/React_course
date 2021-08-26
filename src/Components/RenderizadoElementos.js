import React,{Component} from "react"
import data from "../helpers/data.json"

function ElementoLista(props){
    return(
        <li><a href={props.el.web} target="_blank">{props.el.name}</a></li>
    )
}

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
                <ol>
                    {
                        this.state.seasons.map((el,index)=>(
                        <li key={index}>{el}</li>)
                        )}
                </ol>
                <h3>Frameworks Fronted</h3>
                <ul>
                    {
                        data.frameworks.map((el)=>(
                        <ElementoLista key ={el.id} el = {el}/>)
                        )}
                </ul>
            </div>
        )
    }




}