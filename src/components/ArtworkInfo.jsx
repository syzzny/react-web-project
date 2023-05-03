
import React, { useState, useEffect, useContext } from 'react'

import './css/Index.css'

import { Link, useLocation } from 'react-router-dom'
import { EnterModal, DeleteModal } from './Modalbox';
import DataContext from '../context/DataContext';
import { click } from '@testing-library/user-event/dist/click';

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
    const { state,action } = useContext(DataContext);

    // open modal
    // const openModal = () =>{
    //     setIsOpen(true);
    // }

    // close modal
    const closeModal = () => {
        setIsOpen(false);
    };

    const toggleBtn = () => {
        setIsOpen(true);
        SetClickBtn(prev => !prev);
        
        if(clickBtn){
            handleRemove(artwork.title);
        }
        else{
            action.setLikeList(prevList => prevList.concat([artwork]));

        }
        // const { likeList } = state;
        // const isAlreadyAdded = likeList.some(favorite => favorite.id === artwork.id);
        // if (!isAlreadyAdded) {
        //     action.setLikeList(prevList => prevList.concat([artwork]));
        // } else {
        
        // }
    }
    // useEffect(() => {
    //     const storedLikeList = JSON.parse(localStorage.getItem('likeList'));
    //     if (storedLikeList && storedLikeList.length > 0) {
    //         action.setLikeList(storedLikeList);
    //     }
    // }, [action]);

    // data context 가져옴
    const locaton = useLocation();
    const artwork = locaton.state;
    console.log(locaton);

    const handleRemove = (title) => {
        const updatedList = state.likeList.filter((item) => item.title !== title);
        action.setLikeList(updatedList);
    };

    // 관심전시 등록 확인
    // 관심전시로 등록한 리스트에서 검색, (값이 있어서 TRUE로 남아있고 SetClickBtn 실행이 됨)
    useEffect (()=>{
        SetClickBtn(Boolean(state.likeList.find((item)=>(item.title === artwork.title))));
        console.log(state.likeList.find((item)=>(item.title === artwork.title)))
    },[])

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
                            <button className={`heart-button ${clickBtn ? 'selected' : ''}`}
                                onClick={toggleBtn}>
                                {clickBtn ? '관심전시 취소하기' : '관심전시 등록하기'}
                                <img className={`btnimg ${clickBtn ? 'butning-color' : ''}`} src={`${process.env.PUBLIC_URL}/assets/img/heartbtn.png`} alt="" />
                            </button>
                            {clickBtn && <EnterModal isOpen={isOpen} onClose={closeModal} />}
                            {clickBtn || <DeleteModal isOpen={isOpen} onClose={closeModal} />}
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
