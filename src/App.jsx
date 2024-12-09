import React from 'react'
import Counter from './Components/Counter'
import Items from './Components/items'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div className="app">
      <Items name='MacBook pro' price ={10000}/>
      <Items name='pandrive' price ={4000}/>
      <Items name='i Phone' price ={7000}/>
      <Cart/>
    </div>
  )
}

export default App