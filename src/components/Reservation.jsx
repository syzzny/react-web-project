
import React, { useState, useEffect } from 'react'

import './css/Index.css'

import { Link } from 'react-router-dom'




export default function Reservation() {

    return (
        <div className='wrap'>
            <div className='animated-title'>
                <div className='track'>
                    <p className='content'>
                        미술관 내 관람객 안전을 위하여 100% 사전 예약제로 운영중이며, 예약자 본인이 아닌경우 입장이
                        제한될 수 있습니다. *관람을 원하는 전시를 개별적으로 각각 예약해주시길 바랍니다.
                        
                    </p>
                </div>
            </div>
            <header className="res-header">
                <div className='res-header_inner'>
                    <Link to={'/'}>
                        <a href="/">
                            <div id='logo'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo2.png`} alt="" />
                            </div>
                        </a>
                    </Link>
                    <nav className='menu-container'>
                        <ul id='menu'>
                            <li><a href="/"><span>개인예매</span></a></li>
                            <li><a href="/"><span>예매내역</span></a></li>
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

            <main id='Reservaton_main' className='main-container'>
                <div className='reservation-list'>
                    <ul className='list'>
                        <li>
                            <div className='reservation-list-wrap'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`} alt="" />
                                <span>전시회 이름</span>
                                <div className='reservation-list-info'>
                                    <p>20200.00.00 - 2022.02.00</p>
                                    <p>장소: M1</p>
                                </div>
                                <div className='reservation-list-price'>
                                    <span>무료</span>
                                </div>
                                <button>
                                    예매하기
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className='reservation-list-wrap'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/artwork02.jpg`} alt="" />
                                <span>전시회 이름</span>
                                <div className='reservation-list-info'>
                                    <p>20200.00.00 - 2022.02.00</p>
                                    <p>장소: M1</p>
                                </div>
                                <div className='reservation-list-price'>
                                    <span>무료</span>
                                </div>
                                <button>
                                    예매하기
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className='reservation-list-wrap'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/artwork03.jpg`} alt="" />
                                <span>전시회 이름</span>
                                <div className='reservation-list-info'>
                                    <p>20200.00.00 - 2022.02.00</p>
                                    <p>장소: M1</p>
                                </div>
                                <div className='reservation-list-price'>
                                    <span>무료</span>
                                </div>
                                <button>
                                    예매하기
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
