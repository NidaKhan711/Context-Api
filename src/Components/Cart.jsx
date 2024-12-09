import { useCart } from '../Context/Carts'
const Cart = () => {
  const cart = useCart()
  const total = cart.item.reduce((a, b) => a + b.price, 0);
  return (
  
  <div className="card">
    <h1>Cart</h1>
    {
      cart && cart.item.map((item) => (<li> {item.name} - ${item.price}</li>))

    }
    <h5>Total Bill: ${total}</h5>
  </div>
  )
}

export default Cart