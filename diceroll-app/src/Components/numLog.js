import React, { Component } from 'react';

class NumLog extends Component {
    
    
    render(){
        return(
            <p className= "diceDiv">{this.props.numbers}</p>
            )
    }
}
export default NumLog