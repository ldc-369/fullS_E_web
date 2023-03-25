import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../../components/product/productsList/ProductsList';
import './productsByCategoryId.scss';
import useFetch from '../../hooks/useFetch';


function ProductsByCategoryId(props) {
    const {id} = useParams();
    const {data: dataProductsByCateryId} = useFetch(`/api/products?populate=*&filters[categories][id]=${id}`);
    console.log(dataProductsByCateryId);
    

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">{dataProductsByCateryId?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
                <ProductsList data={dataProductsByCateryId} innerPage={false}/>
            </div>
        </div>
    );
}

export default ProductsByCategoryId;