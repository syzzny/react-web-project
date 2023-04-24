import React, { useState, useEffect } from 'react'

import './css/Index.css'
import 'react-calendar/dist/Calendar.css';

import { Link, NavLink } from 'react-router-dom'
import Calendar from 'react-calendar'

export default function ReservatonInfo() {
    const [value, onChange] = useState(new Date());

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
                            <li><NavLink to='/reservation' style={{ fontWeight: 500 }}>개인예매</NavLink></li>
                            <li><NavLink to='/reservationlist' style={{ color: "#9C9C9C" }}>예매내역</NavLink></li>
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

            <main id='ReservationInfo_main'>
                <div className='reservationInfo-img'>
                    <div className='reserInfo-ticket'>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/reser01.jpg`} alt="" />
                        <div className='title'>
                            <span>나탈리 카르푸셴코 사진전</span>
                        </div>
                        <div className='title-border'></div>
                        <div className='place'>
                            <span>장소 - 리움미술관 M2</span>
                        </div>
                        <div className='info-border'></div>
                        <div className='date'>
                            <span>일시 - 2023.04.13</span>
                        </div>
                        <div className='info-border'></div>
                        <div className='people'>
                            <span>인원 - 2명</span>
                        </div>
                    </div>
                </div>
                <div className='reservationInfo-choice'>
                    <div>
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
            </main>
        </div>
    )
}
