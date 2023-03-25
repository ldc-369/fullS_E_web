import React from 'react';
import './product.scss';
import product from '../../../../assets/products/earbuds-prod-1.webp';
import { BASE_URL } from '../../../../utils/api';
import { useNavigate } from 'react-router-dom';


function Product({data, id}) {
    const navigate = useNavigate();
    
    
    return (
        <div className="product-card" onClick={()=>navigate(`/product/${id}`)}>
            <div className="thumbnail">
                <img src={BASE_URL + data.img.data[0].attributes.url} alt="" />
            </div>

            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">{data.price}$</span>
            </div>
        </div>
    );
}

export default Product;