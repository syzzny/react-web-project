
import React, { useState, useEffect } from 'react'

import './css/Index.css'

import { Link } from 'react-router-dom'

export default function ArtworkInfo() {
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
                            <li><a href=""><span>예약</span></a></li>
                        </ul>
                    </nav>
                    <div className='sub-menu'>
                        <ul>
                            <li className='checkart'><a href=""><span>관심전시</span></a></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>


            <main id='ArtworkInfo_main' className='main-container'>
                <div className='artmainimg'>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`} alt="" />
                </div>
                <div className='artworkinfo'>
                    <div className='artworkinfo-wrap'>
                        <div className='infotext'>
                            <ul className='infotext-list'>
                                <li>
                                    <span>전시개요</span>
                                    <p>
                                        전소정은 영상, 사운드, 조각, 출판 등 다양한 매체 실험을 통해 역사와 현재에 관한 새로운 인식을
                                        환기시키는 비선형적인 시공간을 창조해 왔습니다.  물리적 경계의 전환이 일상의 감각적 경험을 관통하는
                                        방식에 관심을 가지며 작가는 동시대의 속도감 속에서 배제된 인물의 목소리, 풍경, 시간을  탐구하는 여정을
                                        이어가고 있습니다.
                                        <br /><br />
                                        소정의 프로젝트 그린스크린은 리움 로비 공간에 놓인 미디어월을 매체이자 장치로 고려하며,
                                        경계에 관한 감각을 다루는 세편의 작품  그린 스크린(2021), 이클립스(2020), 먼저 온 미래(2015)를
                                        소개합니다. 그린 스크린이 소개되는 미디어월을 전시 공간에서 벗어난, 미술관의 여러 공간들을 연결하는
                                        통로이자 임시적 모임의 아케이드 입니다.
                                    </p>
                                </li>
                                <li>
                                    <span>작품설명</span>
                                    <div><img src={`${process.env.PUBLIC_URL}/assets/img/artworkinfo01.jpg`} alt="" /></div>
                                </li>
                            </ul>
                        </div>
                        <div className='heart'>
                            <button className='heart-button'>관심전시 등록하기
                                <img className='btnimg' src={`${process.env.PUBLIC_URL}/assets/img/heartbtn.png`} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
