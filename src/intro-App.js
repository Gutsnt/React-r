import { Component } from "react";
class Botton extends Component{
  render(){
    console.log('Ejecutando metodo render de button')
    return(
      <button>Enviar</button>
    )
  }
}
class App extends Component { 
  state = {
    valor:3
  }
  render(){
    console.log(this.state)
    return(
     <div> 
      <p>hola</p>
      <Botton/>
      <button 
      className={`${this.state.valor}`}
      onClick={() => this.setState({ valor: 2})}>Enviar en App</button>
     </div>
    )
  }
}

export default App;
