import React from 'react' ;

export const TodoItem = (props) => {
  let myStyle = {
    border : "1px solid black" , 
    height : "170px" ,
  }
  return (
    <div className="my-2" style={myStyle}>
      <br/>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className="btn btn-sm btn-danger my-3" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}