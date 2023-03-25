import React, { useContext, useEffect, useState } from 'react';
import './header.scss';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import Cart from '../cart/Cart';
import Search from './search/Search';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../utils/context';


function Header(props) {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearchInput, setShowSearchInput] = useState(false);
    const navigate = useNavigate();
    const {cartItems} = useContext(Context);


    const handleScroll = ()=>{
        const offset = window.scrollY;
        // console.log(offset);
        if(offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <header className={`main-header ${scrolled?"sticky-header":""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={()=>navigate('/')}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>

                    <div className="center" onClick={()=>navigate('/')}>
                        WEB STORE
                    </div>

                    <div className="right">
                        <TbSearch onClick={()=>setShowSearchInput(true)}/>

                        <AiOutlineHeart/>

                        <span className="cart-icon" onClick={()=>setShowCart(true)}>
                            <CgShoppingCart/>

                            {
                                cartItems.length > 0 && <span>{cartItems.length}</span>
                            }
                        </span>
                    </div>
                </div>
            </header>

            {
                showCart && <Cart setShowCart={setShowCart}/>
            }

            {
                showSearchInput && <Search setShowSearchInput={setShowSearchInput}/>
            }
        </>
    );
}

export default Header;