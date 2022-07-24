import { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price:1500, img:'/productos/tomate.jpg'},
      {name: 'Arbejas', price:2000, img:'/productos/arbejas.jpg'},
      {name: 'Lechuga', price:500, img:'/productos/lechuga.jpg'},
    ]
  }
  render(){
    return(
      <div>
        <p>Hola</p>
      </div>
    )
  }
}

export default App;
