import React, { useContext, useEffect } from 'react';
import ProductsList from '../../components/product/productsList/ProductsList';
import { fetchDataFromAPI } from '../../utils/api';
import { Context } from '../../utils/context';
import Banner from './banner/Banner';
import Category from './category/Category';
import './home.scss';

function Home(props) {
    const {dataCategories, setDataCategories, dataProducts, setDataProducts} = useContext(Context);  
    
    
    useEffect(()=>{    
        getProducts();
        getCategories();
    }, []);


    const getProducts = ()=>{
        fetchDataFromAPI('/api/products?populate=*').then((res)=>{
            console.log(res);
            setDataProducts(res);
        });
    }


    const getCategories = ()=>{
        fetchDataFromAPI('/api/categories?populate=*').then((res)=>{
            console.log(res);
            setDataCategories(res);
        });
    }
    
    
    return (
        <div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                    <Category dataCategories={dataCategories}/>
                    <ProductsList data={dataProducts} innerPage={true} title="Popular Products"/>
                </div>
            </div>
        </div>
    );
}

export default Home;