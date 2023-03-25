import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.scss';
import cat1 from '../../../assets/category/cat-1.jpg';
import { BASE_URL } from '../../../utils/api';

function Category({dataCategories}) {
    const navigate = useNavigate();
    
    
    return (
        <div className="shop-by-category">
            <div className="categories">
                {dataCategories?.data?.map((dataElement)=>(
                    <div key={dataElement.id} className="category" onClick={()=>navigate(`/category/${dataElement.id}`)}>
                        <img src={BASE_URL + dataElement.attributes.img.data.attributes.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;