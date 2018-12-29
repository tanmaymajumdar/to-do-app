import React, { Component } from 'react';
import Todo from './individualTodos'
import './index.css'
import FloatingButton from './floatingButton'

class App extends Component {

  state = {

      todos:[
        {id: 1 ,todo : 'buy some milk'},
        {id: 2 ,  todo : 'play mario car'},
        {id: 3 , todo : 'have some fun'}

      ]

  }

  handleDelete = (id) => {
    let tempArray = [...this.state.todos];

    this.state.todos.every(function(item , index) {
      if(id === item.id) {
        tempArray.splice(index , 1);
        return false
      }
      return true;
    });

    this.setState({
        todos:tempArray
    });

  }

  buttonClicked = () => {
    console.log('Add now');
  }

  render() {
    return (
      <div className="App">

        <h1 className="center blue-text" > Todo app </h1>
        <Todo mainTask = {this.state.todos} handleDelete={this.handleDelete}/>
        <FloatingButton buttonClicked={this.buttonClicked}/>
      </div>
    );
  }
}

export default App;
