import { useCart } from '../Context/Carts'
const Items = (probs) => {
    const cart = useCart();
    return (
        <div className="item-card">
            <h4>{probs.name}</h4>
            <p>Price:${probs.price}</p>
            <button onClick={() => cart.setItem([
                ...cart.item,
                { name: probs.name, price: probs.price }])}>Add To Cart</button>

        </div>
    )
}

export default Items