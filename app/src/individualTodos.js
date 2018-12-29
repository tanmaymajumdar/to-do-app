import React from 'react'

const todo = ({mainTask , handleDelete}) => {

  let hasTodos = mainTask.length > 0 ;

  if(hasTodos) {
    var todoList = mainTask.map(todo => {
      return (<div key={todo.id} onClick={() => {handleDelete(todo.id)}} className="todocard myBox"><span className="black-text">{todo.todo}</span></div>);
    });
}else{
    var todoList = <p className="center">You have no todos</p>
}

  return (
    <div className="todos-collection">
      {todoList}
    </div>
  );
}

export default todo;
