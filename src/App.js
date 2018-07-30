import React, { Component } from 'react';
import './App.css';
import InputChange from './Input';

class App extends Component {

  state = {
    inputs: [
      { id: '123', content:''}
    ]
  }


  validationHandler = (length) =>{
    if(length > 5){
      return 'Too long';
    }else{
      return 'Too short';
    }
  }

  inputChangeHandler = (event,index) => {

    this.setState({
      inputs: [
        {id: this.state.inputs[index], content: event.target.value}
      ],
    })
  }

  render() {
    let inputs = null;
    inputs = (
      <div>
        {this.state.inputs.map((userInput, index) => {
          return <InputChange
            id = {userInput.id}
            content = {userInput.content} 
            length = {this.state.inputs[index].content.length}
            change = {(event) => this.inputChangeHandler(event, index)}
            reminder = {this.validationHandler(this.state.inputs[index].content.length)}
          />
        })}
      </div>
    )
    return (
      <div className="App">
        {inputs}
      </div>
    );
  }
}

export default App;
