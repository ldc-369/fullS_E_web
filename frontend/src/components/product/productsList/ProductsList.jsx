import React from 'react';
import './productsList.scss';
import Product from './product/Product';

function ProductsList({data, innerPage, title}) {
    return (
        <div className="products-container">
            {
                innerPage && <div className="sec-heading">{title}</div>
            }
            <div className="products">
                {data?.data?.map((dataElement)=>(
                    <Product key={dataElement.id} data={dataElement.attributes} id={dataElement.id}/>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;