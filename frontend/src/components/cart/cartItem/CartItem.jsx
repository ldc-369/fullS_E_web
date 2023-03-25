import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import product from '../../../assets/products/earbuds-prod-1.webp';
import { BASE_URL } from '../../../utils/api';
import { Context } from '../../../utils/context';
import './cartItem.scss';

function CartItem(props) {
    const {cartItems, handleRemoveFromCart, handleCartProductQuantity} = useContext(Context);
    
    
    return (
        <div className="cart-products">
            {cartItems?.map((cartElement)=>(
                <div key={cartElement?.id} className="cart-product">
                    <div className="img-container">
                        <img src={BASE_URL + cartElement?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                    </div>

                    <div className="prod-details">
                        <span className="name">{cartElement?.attributes.title}</span>

                        <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(cartElement)} />

                        <div className="quantity-buttons">
                            <span onClick={()=>handleCartProductQuantity("dec", cartElement)}>-</span>
                            <span>{cartElement?.attributes.quantity}</span>
                            <span onClick={()=>handleCartProductQuantity("inc", cartElement)}>+</span>
                        </div>

                        <div className="text">
                            <span>{cartElement?.attributes.quantity}</span>
                            <span>x</span>
                            <span className="hightlight">{cartElement?.attributes.price}$</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartItem;