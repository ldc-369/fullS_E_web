import React, { useEffect, useState } from 'react';
import './search.scss';
import { MdClose } from 'react-icons/md';
import product from '../../../assets/products/earbuds-prod-1.webp';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { BASE_URL } from '../../../utils/api';


function Search({setShowSearchInput}) {
    const [querySearch, setQuerySearch] = useState(null);
    const navigate = useNavigate();


    const onChange = (e)=>{
        setQuerySearch(e.target.value);
    }


    let {data: dataProductsSearch} = useFetch(`/api/products?populate=*&filters[title][$contains]=${querySearch}`);


    if(querySearch?.length < 1) {
        dataProductsSearch = null;
    }


    return (
        <div className="search-modal">

            <div className="form-field">
                <input type="text" autoFocus placeholder="Search for products..." value={querySearch} onChange={onChange} />
                <MdClose onClick={()=>setShowSearchInput(false)} />
            </div>

            <div className="search-result-content">
                <div className="search-results">
                    {dataProductsSearch?.data?.map((dataElement) => (
                        <div 
                            key={dataElement?.id} className="search-result-item"
                            onClick={()=>{
                                navigate(`/product/${dataElement?.id}`);    
                                setShowSearchInput(false);
                            }}
                        >

                            <div className="img-container">
                                <img src={BASE_URL + dataElement?.attributes.img.data[0].attributes.url} alt="" />
                            </div>

                            <div className="prod-details">
                                <span className="name">{dataElement?.attributes.title}</span>
                                <span className="desc">{dataElement?.attributes.desc}</span>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Search;