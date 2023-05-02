import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';

import DataContext from '../context/DataContext';
import { useContext } from 'react';

import './css/Index.css'

import { Link } from 'react-router-dom'

import ScrollAnimate from 'react-scroll-fade-animation';

export default function ArtworkAll(props) {

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


    // data context 가져옴
    const { artlist } = useContext(DataContext).state;

    // 날짜 , 장소 확인 state
    const [selectButton, setSelectButton] = useState('장소');

    // ----------------------------------------------------------장소 필터 ----------------------------------------------------------
    // place 기본설정 '전체보기'로 설정
    const [selectedPlace, setSelectedPlace] = useState('전체보기');
    const [filteredArtlist, setFilteredArtlist] = useState(artlist);

    const handlePlaceClick = (e) => {
        e.preventDefault();
        const selected = e.target.textContent;
        setSelectedPlace(selected);
        setSelectButton('장소');

        if (selected === '전체보기') {
            setFilteredArtlist(artlist);
        } else {
            const filtered = artlist.filter((artwork) => artwork.place === selected);
            setFilteredArtlist(filtered);
        }
    };

    // const [noData, setNoData] = useState(false);
    // const handleClick = (e) =>{
    //     if ( filtered.length === 0) {
    //         setNoData(true);
    //     } else {
    //         setFilteredArtlistDate(filtered);
    //         setNoData(false);
    //     }
    // }

    // ----------------------------------------------------------날짜 필터 ----------------------------------------------------------
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredArtlistDate, setFilteredArtlistDate] = useState(filteredArtlist);

    const handleDateClick = (e) => {
        e.preventDefault();
        const selected = e.target.textContent;
        setSelectedDate(selected);
        setSelectButton('날짜');

        if (selected === '전체') {
            setFilteredArtlistDate(filteredArtlist);
        } else if (selected === '예정전시') {
            const today = new Date();
            const filtered = filteredArtlist.filter((artwork) => {
                const startDate = new Date(artwork.start_date);
                return startDate > today;
            });
            setFilteredArtlistDate(filtered);
        } else if (selected === '현재전시') {
            const today = new Date();
            const filtered = filteredArtlist.filter((artwork) => {
                const startDate = new Date(artwork.start_date);
                const finishDate = new Date(artwork.finish_date);
                return startDate < today && finishDate > today;
            });
            setFilteredArtlistDate(filtered);
        }
        console.log(selected);
    };


    // const filteredData = handlePlaceClick(handleDateClick);
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


            <main id='ArtworkAll_main' className='main-container'>

                <div className='artfilter'>
                    <div className='artfilter-wrap'>
                        <div className='filter-top'>
                            <div className='filter-name'>
                                <h3>Art Museum</h3>
                            </div>
                            <div className='filter-top-list'>
                                <ul className='filter-top-list-place'>
                                    <li>
                                        <a href=""
                                            className={selectedPlace === '전체보기' ? 'selected' : ''}
                                            onClick={handlePlaceClick}>
                                            전체보기
                                        </a>
                                    </li>
                                    <li>
                                        <a href=""
                                            className={selectedPlace === '국립 현대미술관' ? 'selected' : ''}
                                            onClick={handlePlaceClick}>
                                            국립 현대미술관
                                        </a>
                                    </li>
                                    <li>
                                        <a href=""
                                            className={selectedPlace === '서울 시립미술관' ? 'selected' : ''}
                                            onClick={handlePlaceClick}>서울 시립미술관</a>
                                    </li>
                                    <li>
                                        <a href=""
                                            className={selectedPlace === '리움 미술관' ? 'selected' : ''}
                                            onClick={handlePlaceClick}>리움 미술관</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='borderline'></div>
                        <div className='filter-bottom'>
                            <div className='filter-name'>
                                <h3>Filter by</h3>
                            </div>
                            <span>전시기간</span>
                            <div className='art-date'>
                                <ul className='art-date-list'>
                                    <li>
                                        <a href=""
                                            className={selectedDate === '전체' ? 'selected' : ''}
                                            onClick={handleDateClick}>전체
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className={selectedDate === '예정전시' ? 'selected' : ''}
                                            onClick={handleDateClick}>예정전시</a>
                                    </li>
                                    <li>
                                        <a href="" className={selectedDate === '현재전시' ? 'selected' : ''}
                                            onClick={handleDateClick}>현재전시</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='artlist'>
                    <div className='artlist-wrap'>
                        <ul className='artlist-img'>
                            {selectButton === '장소' && filteredArtlist.map((artwork) => (
                                
                                    
                                    <li key={artwork.title}>
                                        <Link to={{pathname: "/artworkinfo"}} state={artwork}>
                                            <img src={artwork.img} alt="" />
                                        
                                        <div className='article-info'>
                                            <span className='title'>{artwork.title}</span>
                                            <span className='date'>
                                                {artwork.start_date.toLocaleDateString()} - {artwork.finish_date.toLocaleDateString()}
                                            </span>
                                        </div>
                                        </Link>
                                    </li>
                                    
                                
                            ))
                            }
                            {selectButton === '날짜' && filteredArtlistDate.map((artwork) => (
                                
                                    <li key={artwork.title}>
                                        <Link to={{pathname: "/artworkinfo"}} state={artwork}>
                                        <a href=""><img src={artwork.img} alt="" /></a>
                                        <div className='article-info'>
                                            <span className='title'>{artwork.title}</span>
                                            <span className='date'>
                                                {artwork.start_date.toLocaleDateString()} - {artwork.finish_date.toLocaleDateString()}
                                            </span>
                                        </div>
                                        </Link>
                                    </li>
                        
                            ))
                            }
                            {selectButton === '장소' && filteredArtlist.length === 0 && (
                                <p className='alert_art'>해당 전시가 없습니다.</p>
                            )}
                            {selectButton === '날짜' && filteredArtlistDate.length === 0 && (
                                <p className='alert_art'>해당 전시가 없습니다.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
