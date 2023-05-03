import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';

import DataContext from '../context/DataContext';
import { useContext } from 'react';

import './css/Index.css'

import { Link, useLocation } from 'react-router-dom'

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


    // 관심 전시 가져오기 
    const { state, action } = useContext(DataContext);
    // const handleRemove = (index) => {
    //     const updatedList = state.likeList.filter((item, idx) => idx !== index);
    //     // setState(prevState => ({
    //     //     ...prevState,
    //     //     likeList: updatedList
    //     // }));

    //     setState(updatedList);
    // }

    const handleRemove = (index) => {
        const updatedList = state.likeList.filter((item, idx) => idx !== index);
        action.setLikeList(updatedList);
    };
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
                <div className='heartartlist-wrap'>
                    <h2 className='heart-title'>Exhibition of my interest 💣💥</h2>
                    <ul className='heartartlist-img'>
                        {
                            state.likeList.map((favorites, index) => (
                                <li key={index}>
                                    <div className='heart-img'>
                                        <img src={favorites.img} />
                                    </div>
                                    <div className='heartarticle-info'>
                                        <span className='title'>{favorites.title}</span>
                                        <span className='date'>
                                            {favorites.start_date.toLocaleDateString()} - {favorites.finish_date.toLocaleDateString()}
                                        </span>
                                        <button className='heartart-btn' onClick={() => handleRemove(index)} >삭제</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>
        </div>
    )
}
