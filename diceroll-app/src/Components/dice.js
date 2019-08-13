import React, { Component } from 'react';
import '../App.css';

class Dice extends Component{
    
    render(){
        return(
            <div className ="diceDiv">
            <h1>Dice Roller</h1>
            <button className="button" onClick = {this.props.rollDice}>Roll Dice</button> 
            </div>
            )
    }
}

export default Dice;