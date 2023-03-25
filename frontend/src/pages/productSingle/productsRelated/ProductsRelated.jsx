import React from 'react';
import ProductsList from '../../../components/product/productsList/ProductsList';
import useFetch from '../../../hooks/useFetch';


function ProductsRelated({id, categoryId}) {
    const {data: dataProductsRelated} = useFetch(`/api/products?populate=*&filters[id][$ne]=${id}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);
    

    return (
        <div className="related-products">
            <ProductsList data={dataProductsRelated} innerPage={true} title="Related Products"/>
        </div>
    );
}

export default ProductsRelated;