import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export const Context = createContext();


const AppContext = ({children})=>{
    const [dataCategories, setDataCategories] = useState();     
    const [dataProducts, setDataProducts] = useState();
    const [cartItems, setCartItems] = useState([]);   
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();


    useEffect(()=>{
        window.scrollTo(0, 0);   
    }, [location]);


    useEffect(()=>{
        let subTotal = 0;
        cartItems.map((cartElement)=>(
            subTotal += cartElement?.attributes.price * cartElement?.attributes.quantity
        ));
        setCartSubTotal(subTotal);
    }, [cartItems]);


    const handleAddToCart = (dataProductById, quantity)=>{
        let items = [...cartItems];   
        let index = items.findIndex((itemElement)=>itemElement.id === dataProductById.id);   
        if(index !== -1) {  
            items[index].attributes.quantity += quantity;   
        } else {   
            dataProductById.attributes.quantity = quantity;
            items = [...items, dataProductById];   
        }
        setCartItems(items);    
    }


    const handleRemoveFromCart = (cartElement)=>{
        let items = [...cartItems];
        items = items.filter((itemElement) => itemElement.id !== cartElement.id); 
        setCartItems(items);
    }
    


    const handleCartProductQuantity = (action, cartElement)=>{
        let items = [...cartItems];
        let index = items.findIndex((itemElement) => itemElement.id === cartElement.id);
        if(action === "inc") {
            items[index].attributes.quantity += 1;
        } else if(action === "dec"){
            if(items[index].attributes.quantity > 1) {
                items[index].attributes.quantity -= 1;
            }
        }
        setCartItems(items);
    }
    
    
    return (
        <Context.Provider value={{
            dataCategories,
            setDataCategories,
            dataProducts,
            setDataProducts,
            cartItems,
            setCartItems,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity
        }}>{children}</Context.Provider>
    );
}


export default AppContext;