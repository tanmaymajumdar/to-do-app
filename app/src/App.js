import React, { Component } from 'react';
import Todo from './individualTodos'
import './index.css'
import FloatingButton from './floatingButton'
import AddTodo from './addTodo';

class App extends Component {

  state = {

      todos:[
        {id: 1 ,todo : 'buy some milk'},
        {id: 2 ,  todo : 'play mario car'},
        {id: 3 , todo : 'have some fun'}

      ],
      editTextVisibility:false,
      content:""

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
    let visibility = this.state.editTextVisibility;

    visibility = !visibility;

    this.setState({
      editTextVisibility : visibility
    });

    console.log(visibility +" here2");
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let tempArray = {
      id : new Date().getTime(),
      todo : this.state.content
    }

    let newArr = [...this.state.todos , tempArray];

    this.setState({
      todos : newArr,
      editTextVisibility:false,
      content:""
    });

  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      content:event.target.value
    });
  }

  render() {
    return (
      <div className="App">

        <h1 className="center blue-text" > Todo app </h1>
        <Todo mainTask = {this.state.todos} handleDelete={this.handleDelete}/>
        <AddTodo visibility={this.state.editTextVisibility} handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>
        <FloatingButton buttonClicked={this.buttonClicked}/>
      </div>
    );
  }
}

export default App;
