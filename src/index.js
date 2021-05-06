import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import {Component} from 'react';

class TestProj extends Component {
    state = {
        score: 0,
        currentInput: 0
    }

    increment = () => {
        console.log(typeof this.state.currentInput)
        if (parseInt(this.state.currentInput) === 0 || parseInt(this.state.currentInput) === null) {
            this.setState ({
                score: this.state.score + 1
            }) 
        } else {
            this.setState({
                score: this.state.score + this.state.currentInput
            })
        }
    }

    decrement = () => {
        console.log(typeof this.state.currentInput)
        if (parseInt(this.state.currentInput) === 0 || parseInt(this.state.currentInput) === null) {
            this.setState ({
                score: this.state.score - 1
        }) 
        }   else {
            this.setState({
                score: this.state.score - this.state.currentInput
            })
        }
    }

    updateInput = (input) => {
        console.log(input)
        this.setState ({
            currentInput: parseInt(input)
        })
        // console.log(this.state.currentInput)
    }
    

    render (){
        console.log("Start")
        return (
        <div className="main-content">
             <h2>{this.state.score}</h2>
            <input type="number" className="primary-input" onChange={input => this.updateInput(input.target.value)}  required></input>
            <div><button className="btn" onClick={this.decrement}>-</button>
            <button className="btn" onClick={this.increment}>+</button>
            </div>
            
           
        </div>
        )
    }
}

ReactDOM.render(<TestProj />, document.getElementById("root"));