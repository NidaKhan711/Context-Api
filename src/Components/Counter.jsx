import React ,{useContext} from 'react'
import './Counter.css'
import {countContext} from '../Context/Context.jsx'

const Counter = () => {

    const {count,setCount} =useContext(countContext)

    return (
    <div className="count">
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button> 
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter