import React from 'react';
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
import './footer.scss';


function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Officia cupidatat laborum ea duis occaecat irure duis aute dolor id. Officia quis consequat dolor occaeca
                        Aliqua excepteur in nisi labore esse minim dolor tempor officia laboris esse sunt nulla Lorem. Nostrud sunt ullamco 
                        Elit ut mollit officia est elit. Laboris qui aliqua deserunt nostrud non. 
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>

                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            Huỳnh Văn Nghệ, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng, 688006
                        </div>
                    </div>
                    
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">Phone: 0348 706 198</div>
                    </div>

                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">Email: admin@gmail.com</div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        WEBSTORE 2022 CREATED BY ledinhcuong@gmail.com. PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;