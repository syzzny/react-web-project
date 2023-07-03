import React, { useState, useEffect } from 'react'

import './css/Index.css'
import './css/Media.css'

import { Link } from 'react-router-dom'

import DataContext from '../context/DataContext';
import { useContext } from 'react';

import ScrollAnimate from 'react-scroll-fade-animation';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);



export default function Index() {

    // useState 훅으로 'prevScrollY'와 'visible' 상태값 초기화
    // prevScollY : 스크롤 전 위치, visible : 헤어 표시 여부를 나타내는 불리언 값
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    // useEffect 훅을 사용하여 스크롤 이벤트 등록
    useEffect(() => {
        /* handleScroll 함수는 현재 스크롤 위치를 계산하여 'prevScrollY' 값을 업데이트하고,
            현재 스크롤 방향에 따라 visible 값을 변경*/
        // 스크롤 방향이 아래쪽이면 visible 값을 false로 설정하여 헤더 숨기기
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (prevScrollY < currentScrollY && visible) {
                setVisible(false);
            } else if (prevScrollY > currentScrollY && !visible) {
                setVisible(true);
            }

            setPrevScrollY(currentScrollY);
        };

        // 이벤트 리스너 등록
        window.addEventListener("scroll", handleScroll);

        // 이벤트 등록 해제 함수를 반환하여 컴포너트가 언마운트 될때 이벤트 리스너 삭제
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY, visible]);

    // 'visible' 값에 따라 클래스 이름을 동적으로 할당하여 헤더의 표시여부 결정
    // true인 경우 "header" false인 경우 "header header--hidden" 클래스 이름이 할당
    const header = visible ? "header" : "header header--hidden";


    // data context 가져옴
    const { artlist } = useContext(DataContext).state;
    const { programList } = useContext(DataContext).state;

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
                            <li><a href="#main-artwork"><span>전시</span></a></li>
                            <li><a href="#main-program"><span>프로그램</span></a></li>
                            <li><a href="#main-place"><span>공간</span></a></li>
                            <li><Link to="/reservation"><span>예약</span></Link></li>
                        </ul>
                    </nav>
                    <div className='sub-menu'>
                        <ul>
                            <li className='checkart'><Link to={'/heartartwork'}><span>관심전시</span></Link></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                    {/* <nav role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu">
                                <a href="#main-artwork">전시</a>
                                <a href="#"><li>About</li></a>
                                <a href="#"><li>Info</li></a>
                                <a href="#"><li>Contact</li></a>
                                <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                            </ul>
                        </div>
                    </nav> */}
                </div>
            </header>

            <main id='main' className='main-container'>
                <div className='main-wrap'>
                    <div className='main_slogan'>
                        <h2>Discover the beauty of human creativity at our art museum.</h2>
                    </div>
                    <div className='main_img'>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/mainimg.jpg`} alt="" />
                    </div>
                </div>


                <ScrollAnimate path={'top'} duration={1000}>
                    <div className='main-artwork' id='main-artwork'>
                        <div className='main-artwrok-wrap'>
                            <div className='main-artwork_slogan'>
                                <h2>We present the best work.</h2>
                            </div>
                            <div className='main-artwork-more'>
                                <Link to={'/artworkall'}>


                                    <span>more about art</span>
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/moreicon.png`} alt="" />

                                </Link>
                            </div>
                            <div className='main-artwork-art'>
                                {/* spaceBetween : Slide간의 간격, slidesPreview : 한번에 보여지는 slide 개수
                                    loop = {true} : slide가 무한대로 반복 순환 */}
                                <Swiper
                                    spaceBetween={10} slidesPerView={2} loop={true} pagination={{ clickable: true }}
                                    navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
                                    breakpoints={
                                        { 390: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }
                                    }>
                                    <ul className='artwork-list'>
                                        {
                                            artlist.map((artwork) => (
                                                <SwiperSlide>
                                                    <li className='swiper-slider'>
                                                        <Link to={{ pathname: "/artworkinfo" }} state={artwork}>
                                                            <img src={artwork.img} alt="" />
                                                        </Link>
                                                    </li>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </ul>
                                    <div className='allswiperbutton'>
                                        <div className='swiper-prev'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/slideprev.png`} alt="" />
                                        </div>
                                        <div className='swiper-next'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/slidenext.png`} alt="" />
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </ScrollAnimate>
                <ScrollAnimate path={'top'} duration={1000}>
                    <div className='main-program' id='main-program'>
                        <div className='main-program-wrap'>
                            <div className='main-program_slogan'>
                                <h2>PROGRAM</h2>
                            </div>
                            <div className='border'></div>
                            <ul>
                                <Swiper slidesPerView={1} autoplay={{ delay: 4000 }} loop={true} modules={[Autoplay]}>

                                    {
                                        programList.map((program) => (
                                            <SwiperSlide>
                                                <li>
                                                    <div className='main-program-infor'>
                                                        <div className='main-program-sub'>
                                                            <span className='place'>{program.place}</span>
                                                            <span className='price'>{program.price}</span>
                                                            <span className='time'>{program.date}</span>
                                                        </div>
                                                        <div className='main-program-title'>
                                                            <span>{program.title} <br />{program.subtitle}</span>
                                                        </div>
                                                        <Link to={{ pathname: "/programinfo" }} state={program}>
                                                            <div className='main-program-button'>
                                                                <img src={`${process.env.PUBLIC_URL}/assets/img/programicon.png`} alt="" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className='main-program-img'>
                                                        <img src={program.img} alt="" />
                                                    </div>
                                                </li>
                                            </SwiperSlide>
                                        ))
                                    }

                                    {/* <SwiperSlide>
                                        <li>
                                            <div className='main-program-infor'>
                                                <div className='main-program-sub'>
                                                    <span className='place'>Exhibition Hall</span>
                                                    <span className='price'>FREE</span>
                                                    <span className='time'>Tue,Fri 10:00am - 11:00am</span>
                                                </div>
                                                <div className='main-program-title'>
                                                    <span>[MAURIZIO CATTELAN] <br />예술적 경험을 확장하는 대학생 교육</span>
                                                </div>
                                                <Link to={'/programinfo'}>
                                                    <div className='main-program-button'>
                                                        <img src={`${process.env.PUBLIC_URL}/assets/img/programicon.png`} alt="" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='main-program-img'>
                                                <img src={`${process.env.PUBLIC_URL}/assets/img/program02.jpg`} alt="" />
                                            </div>
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li>
                                            <div className='main-program-infor'>
                                                <div className='main-program-sub'>
                                                    <span className='place'>Exhibition Hall</span>
                                                    <span className='price'>FREE</span>
                                                    <span className='time'>Tue,Fri 10:00am - 11:00am</span>
                                                </div>
                                                <div className='main-program-title'>
                                                    <span>[MAURIZIO CATTELAN] <br />예술적 경험을 확장하는 대학생 교육</span>
                                                </div>
                                                <Link to={'/programinfo'}>
                                                    <div className='main-program-button'>
                                                        <img src={`${process.env.PUBLIC_URL}/assets/img/programicon.png`} alt="" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='main-program-img'>
                                                <img src={`${process.env.PUBLIC_URL}/assets/img/program03.jpg`} alt="" />
                                            </div>
                                        </li>
                                    </SwiperSlide> */}
                                </Swiper>
                            </ul>
                            <div className='border'></div>
                        </div>
                    </div>
                </ScrollAnimate>

                <ScrollAnimate path={'top'} duration={1000}>
                    <div className='main-place' id='main-place'>
                        <div className='main-place-wrap'>
                            <div className='main-place_slogan'>
                                <h2>Where creativity meets strategy.</h2>
                            </div>
                            <ul className='main-place-contents'>
                                <li className='contents'>
                                    <div className='main-contents-img'>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/museum01.jpg`} alt="" />
                                    </div>
                                    <div className='main-contents-title'>
                                        <p className='museum'>국립현대미술관</p>
                                        <p className='address'>서울 종로구 삼청로30 소격동 165-10</p>
                                    </div>
                                </li>
                                <li className='contents'>
                                    <div className='main-contents-img'>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/museum02.jpg`} alt="" />
                                    </div>
                                    <div className='main-contents-title'>
                                        <p className='museum'>서울시립미술관</p>
                                        <p className='address'>서울 중구 덕수궁길61 서소문동 37</p>
                                    </div>
                                </li>
                                <li className='contents'>
                                    <div className='main-contents-img'>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/museum03.jpg`} alt="" />
                                    </div>
                                    <div className='main-contents-title'>
                                        <p className='museum'>리움 미술관</p>
                                        <p className='address'>서울 용산구 이태원로 55길 60-16</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollAnimate>
            </main>


            <footer id='footer'>
                <div className='footer-wrap'>
                    <div className='footer-top'>
                        <nav className='footer_menu-container'>
                            <ul id='footer-menu'>
                                <li><a href=""><span>이메일 무단수집 거부</span></a></li>
                                <li><span>|</span></li>
                                <li><a href=""><span>개인정보처리방침</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='footer-bottom'>
                        <div className='footer-logo'>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/logo2.png`} alt="" />
                        </div>
                        <div className='footer-address'>
                            <p>(우 49300) 부산광역시 사하구 낙동남로 1191 (하단동) 부산현대미술관</p>
                            <p>Busan Modern Art Museum Nakdongnam -ro, Saha -gu, Busan (Hadan -dong)</p>
                        </div>
                        <div className='copyright'>
                            <span>ⓒ 2017 by Museum of Contemporary Art Busan all right reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
