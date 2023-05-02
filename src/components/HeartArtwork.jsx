import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';

import DataContext from '../context/DataContext';
import { useContext } from 'react';

import './css/Index.css'

import { Link } from 'react-router-dom'

export default function HeartArtwork() {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (prevScrollY < currentScrollY && visible) {
                setVisible(false);
            } else if (prevScrollY > currentScrollY && !visible) {
                setVisible(true);
            }
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY, visible]);

    const header = visible ? "header" : "header header--hidden";

    
    return (
        <div className='wrap'>
            <header className={header}>
                <div className='header_inner'>
                    <Link to={'/'}>
                        <a href="/">
                            <div id='logo'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo2.png`} alt="" />
                            </div>
                        </a>
                    </Link>
                    <nav className='menu-container'>
                        <ul id='menu'>
                            <li><Link to={'/'}>전시</Link></li>
                            <li><Link to={'/'}>프로그램</Link></li>
                            <li><Link to={'/'}>공간</Link></li>
                            <li><Link to={'/reservation'}>예약</Link></li>
                        </ul>
                    </nav>
                    <div className='sub-menu'>
                        <ul>
                            <li className='checkart'><Link to={'/heartartwork'}><span>관심전시</span></Link></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main id='HeartArtwork_main' className='main-container'>
                <div className='heartart'>
                    <ul className='heartartlist'>
                        <li>
                            <div>
                                <img src="" alt="" />

                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
