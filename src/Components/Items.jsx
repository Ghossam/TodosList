import React from 'react'
//using destructuring concept
const Items = ({todo, onDelete}) => {
  return (
    <>
    <h2>{todo.desc}</h2>
    <h1>{todo.title}</h1>
    <button className="btn btn-sm btn-outline-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </>
  )
}
export default Items;