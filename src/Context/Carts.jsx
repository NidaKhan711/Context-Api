import { createContext, useState ,useContext} from 'react'

export const cartContext = createContext(null);
export const useCart =()=>{
    const cart = useContext(cartContext);
    return cart;
}


export const CartProvider = ({ children }) => {

    const [item, setItem] = useState([])
    
    return (
        <cartContext.Provider value={{ item, setItem }}>
            {children}
        </cartContext.Provider>
    )

}