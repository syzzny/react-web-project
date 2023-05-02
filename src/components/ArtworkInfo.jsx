
import React, { useState, useEffect, useRef } from 'react'

import './css/Index.css'

import { Link, useLocation } from 'react-router-dom'
import { EnterModal, DeleteModal } from './Modalbox';

export default function ArtworkInfo(props) {

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

    // ---------모달-------------------------------------------------------------------------
    const [isOpen, setIsOpen] = useState(false);
    const [clickBtn, SetClickBtn] = useState(false);

    // open modal
    // const openModal = () =>{
    //     setIsOpen(true);
    // }
    
    // close modal
    const closeModal = () =>{
        setIsOpen(false);
    }

    const toggleBtn = () => {
        setIsOpen(true);
        SetClickBtn(prev => !prev);
    }

     // data context 가져옴
    const locaton = useLocation();
    const artwork = locaton.state;
    console.log(locaton);

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


            <main id='ArtworkInfo_main' className='main-container'>
                <div className='artmainimg'>
                    <img src={artwork.img} alt="" />
                </div>
                <div className='artworkinfo'>
                    <div className='artworkinfo-wrap'>
                        <div className='infotext'>
                            <ul className='infotext-list'>
                                <li>
                                    <span>전시개요</span>
                                    <p>
                                        {artwork.info}
                                        <br></br>
                                        <br></br>
                                        {artwork.info2}
                                    </p>
                                </li>
                                <li>
                                    <span>작품설명</span>
                                    <div><img src={`${process.env.PUBLIC_URL}/assets/img/artworkinfo01.jpg`} alt="" /></div>
                                </li>
                            </ul>
                        </div>
                        <div className="heart">
                            <button className={`heart-button ${clickBtn ? 'selected' : ''}`} onClick={toggleBtn}>
                                {clickBtn ? '관심전시 취소하기' : '관심전시 등록하기'}
                                <img className={`btnimg ${clickBtn ? 'butning-color' : ''}`} src={`${process.env.PUBLIC_URL}/assets/img/heartbtn.png`} alt="" />
                            </button>
                            {clickBtn && <EnterModal isOpen={isOpen} onClose={closeModal}/>}
                            {clickBtn || <DeleteModal isOpen={isOpen} onClose={closeModal}/>}
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
