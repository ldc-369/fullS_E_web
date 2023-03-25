import React, { useContext, useState } from 'react';
import './productSingle.scss';
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/api';
import ProductsRelated from './productsRelated/ProductsRelated';
import { Context } from '../../utils/context';


function ProductSingle(props) {
    const {id} = useParams();
    const {data: dataProductById} = useFetch(`/api/products?populate=*&filters[id]=${id}`);
    const [quantity, setQuantity] = useState(1);
    const {handleAddToCart} = useContext(Context);

    
    if(!dataProductById) {
        return;
    }


    const attributes = dataProductById?.data[0]?.attributes;
    

    const countQuantity = (action)=>{
        if(action === "increment") {
            setQuantity((prevState) => prevState + 1);
        } else if(action === "decrement"){
            setQuantity((prevState) => {
                if(prevState === 1) {
                    return 1;
                }
                return prevState - 1;
            });
        }
    }
    
    
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={BASE_URL + attributes?.img?.data[0]?.attributes?.url} alt="" />
                    </div>
                    
                    <div className="right">
                        <span className="name">{attributes?.title}</span>
                        <span className="price">{attributes?.price + "$"}</span>
                        <span className="desc">{attributes?.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={()=>countQuantity("decrement")}>-</span>
                                <span>{quantity}</span>
                                <span onClick={()=>countQuantity("increment")}>+</span>
                            </div>
                            
                            <button className="add-to-cart-button" onClick={()=>{
                                handleAddToCart(dataProductById?.data[0], quantity);
                                setQuantity(1);    
                            }}>
                                <FaCartPlus size={20}/>
                                Add to cart
                            </button>
                        </div>

                        <span className="divider" />  

                        <div className="info-item">

                            <span className="text-bold">
                                Category:
                                <span> {attributes?.categories?.data[0]?.attributes?.title}</span>
                            </span>

                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>

                        </div>
                    </div>
                </div>

                <ProductsRelated id={id} categoryId={attributes?.categories.data[0].id}/>
            </div>
        </div>
    );
}

export default ProductSingle;