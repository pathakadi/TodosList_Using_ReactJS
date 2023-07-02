import React from 'react' ;
import {TodoItem} from "./TodoItem" ;

export const Todos = (props) => {
  return (
    <div className='container text-center'>
      {props.todos.length === 0 ? "No Todos To Display" :
        props.todos.map((todo)=>{
          return <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
        })
      }
    </div>
  )
}