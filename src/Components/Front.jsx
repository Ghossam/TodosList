import React from 'react'
import Items from './Items'
//using props concept
const Front = (props) => {
  return (
  <>
    {props.todos.length === 0 ? <h1>
      No Todo's To Show
    </h1> :
    props.todos.map((todo)=>{
    return <Items todo={todo} onDelete={props.onDelete}/>//using javascript higher order method
    //todo ko attribute mile hai items component mein
    })}
    </>
  )
}

export default Front