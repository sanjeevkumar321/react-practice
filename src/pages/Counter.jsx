import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0
    }
  
    handelIncriment = () => {
       this.setState({count: this.state.count + 1})
    };
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {this.state.count === 0 && <h1>zero</h1>}     
                <button onClick={this.handelIncriment}>click me</button>
            </div>
        )
    }
}
