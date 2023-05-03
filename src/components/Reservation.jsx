
import React, { useState, useEffect } from 'react'

import './css/Index.css'

import { Link, NavLink } from 'react-router-dom'
import NavReservation from './NavReservation'

import { ReservPlace01, ReservPlace02, ReservPlace03 } from './Modalbox';
import { is } from 'date-fns/locale';


export default function Reservation() {

    // 모달 -------------------------------------------------------------------------------
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    // open modal
    const openModal1 = () => {
        setIsOpen1(true);
    }
    const openModal2 = () => {
        setIsOpen2(true);
    }
    const openModal3 = () => {
        setIsOpen3(true);
    }

    // close modal
    const closeModal1 = () => {
        setIsOpen1(false);
    }
    const closeModal2 = () => {
        setIsOpen2(false);
    }
    const closeModal3 = () => {
        setIsOpen3(false);
    }


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
            <NavReservation />

            <main id='Reservaton_main' className='main-container'>
                <div className='reservation-list'>
                    <ul className='list'>
                        <li>
                            <div className='reservation-list-wrap'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`} alt="" />
                                <div className='reservation-list-title'>
                                    <span>[기획전] 마우리치오 카텔란</span>
                                </div>
                                <div className='reservatonAll'>
                                    <div className='reservation-list-info'>
                                        <p>2023.01.30 - 2023.07.16</p>
                                        <p>장소: M1</p>
                                    </div>
                                    <div className='reservation-list-price'>
                                        <span>무료</span>
                                    </div>
                                </div>
                                <Link to='/reservationinfo'>
                                    <div className='reservation-list-btn-wrap'>
                                        <button className='reservation-list-btn'>
                                            예매하기
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='reservation-list-wrap'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/artwork02.jpg`} alt="" />
                                <div className='reservation-list-title'>
                                    <span>[기획전] 조선의 백자, 군자지향</span>
                                </div>
                                <div className='reservatonAll'>
                                    <div className='reservation-list-info'>
                                        <p>2023.02.28 - 2023.05.28</p>
                                        <p>장소: 아동교육문화센터</p>
                                    </div>
                                    <div className='reservation-list-price'>
                                        <span>무료</span>
                                    </div>
                                </div>
                                <Link to='/reservationinfo'>
                                    <div className='reservation-list-btn-wrap'>
                                        <button className='reservation-list-btn'>
                                            예매하기
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='reservation-list-wrap'>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/artwork03.jpg`} alt="" />
                                <div className='reservation-list-title'>
                                    <span>[기획전] 마우리치오 카텔란</span>
                                </div>
                                <div className='reservatonAll'>
                                    <div className='reservation-list-info'>
                                        <p>2023.01.31 - 2023.07.16</p>
                                        <p>장소: M2</p>
                                    </div>
                                    <div className='reservation-list-price'>
                                        <span>무료</span>
                                    </div>
                                </div>
                                <Link to='/reservationinfo'>
                                    <div className='reservation-list-btn-wrap'>
                                        <button className='reservation-list-btn'>
                                            예매하기
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className='rest'>
                    <h3>편의시설 안내</h3>
                    <div className='restwrap'>
                        <ul className='restlist'>
                            <li>
                                <div className='restlist-info'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/rest01.jpg`} alt="" />
                                </div>
                                <div className='restlist-span'>
                                    <span>B1 STORE</span>
                                    <button className='restlist-btn' onClick={openModal1}>
                                        자세히 보기
                                    </button>
                                    <ReservPlace01 isOpen={isOpen1} onClose={closeModal1} />
                                </div>

                            </li>
                            <li>
                                <div className='restlist-info'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/rest02.jpg`} alt="" />
                                </div>
                                <div className='restlist-span'>
                                    <span>B1 CAFE</span>
                                    <button className='restlist-btn' onClick={openModal2}>
                                        자세히 보기
                                    </button>
                                    <ReservPlace02 isOpen={isOpen2} onClose={closeModal2} />
                                </div>

                            </li>
                            <li>
                                <div className='restlist-info'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/rest03.jpg`} alt="" />
                                </div>
                                <div className='restlist-span'>
                                    <span>B1 LOCKER</span>
                                    <button className='restlist-btn' onClick={openModal3}>
                                        자세히 보기
                                    </button>
                                    <ReservPlace03 isOpen={isOpen3} onClose={closeModal3} />
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
