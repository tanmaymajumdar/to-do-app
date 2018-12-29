import React from 'react'

const AddTodo = ({visibility , handleSubmit , handleChange}) => {

  console.log(visibility);

  return (
    <form id={visibility ? 'addTodoform' : 'hidden'} onSubmit = {handleSubmit}>
    <input type="text" placeholder ="Enter your todo" id="addTodoText" onChange={handleChange}/>
    </form>
  );
}

export default AddTodo;
