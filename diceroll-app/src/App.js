import React, { Component } from 'react';
import Dice from './Components/dice';
import NumLog from './Components/numLog.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {num: 0,
                  arr:[]
    }
  }
  rollClick = () =>{
    let{num} = this.state
        let roll = Math.floor( Math.random() * 6 + 1 )
        this.setState({num: roll})
  }
  diceNum = () =>{
    this.setState({num: this.newNum})
  }
  numberStorage = () =>{
    let {arr,num} = this.state
    let numbers = this.state.arr.concat(num)
    this.setState({arr: numbers})
    // console.log(this.state.arr)
  }  
  
  finalRoll = () =>{
    this.rollClick()
    this.numberStorage()
  }
  
  render(){
  return (
    <div>

    <Dice rollDice = {this.finalRoll} dice={this.state.num} />
    <NumLog numbers = {this.state.arr}/>
    </div>
  );
}
}
export default App;
