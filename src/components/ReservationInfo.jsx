import React, { useState, useContext } from 'react'

import './css/Index.css'

import DataContext from '../context/DataContext';
import { Link, NavLink, useLocation} from 'react-router-dom'


import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Reserinfo } from './Modalbox';


export default function ReservatonInfo() {
    const [selected, setSelected] = React.useState(new Date());

    let footer;
    const [counter, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };


    // 모달 -------------------------------------------------------------------------------
    const [isOpen, setIsOpen] = useState(false);

    // open modal
    // const openModal = () =>{
    //     setIsOpen(true);
    // }

    // close modal
    const closeModal = () =>{
        setIsOpen(false);
    }

    // 예약 정보 내보내기    
    // const handleReserve = () => {
    //     onReserve(selected, counter);
    //     setIsOpen(true);
    // };

    const { state,action } = useContext(DataContext);

    const clickBtn = () =>{
        setIsOpen(true);
        action.setReservList(prevList => prevList.concat({...artwork, date:format(selected, 'PP'), counter:counter }));
        console.log(state.reservList);
    }

    const locaton = useLocation();
    const artwork = locaton.state;
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
                <div className='ReservationInfo_wrap'>
                    <div className='reservationInfo-img'>
                        <div className='reserInfo-ticket'>
                            <img src={artwork.img} alt="" />
                            <div className='title'>
                                <span>{artwork.title}</span>
                            </div>
                            <hr className='title_hr'/>
                            <div className='place'>
                                <span>장소 - {artwork.place}</span>
                            </div>
                            <hr className='info_hr'/>
                            <div className='date'>
                                <span>일시 - {format(selected, 'PP')}</span>
                                {/* <p>You picked {format(selected, 'PP')}.</p> */}
                            </div>
                            <hr className='info_hr'/>
                            <div className='people'>
                                <span>인원 - {counter}</span>
                            </div>
                        </div>
                    </div>
                    <div className='reservationInfo-choice'>
                        <div className='reservationInfo-choice-wrap'>
                            <div className='reservationInfo-choice-left'>
                                <div className='calendar'>
                                    <DayPicker
                                        className='rdp'
                                        mode="single"
                                        selected={selected}
                                        onSelect={setSelected}
                                        footer={footer}
                                    />
                                </div>
                                <div className='counter'>
                                    <div className='counter-span'>
                                        <span>인원</span>
                                    </div>
                                    <div className='counter-box'>
                                        <p>성인/청소년/영유아</p>
                                        <div className='conter-bg'>
                                            <div>{counter}</div>
                                            <div className='counterbtn'>
                                                <button onClick={handleDecrement}>-</button>
                                                <button onClick={handleIncrement} >+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='information'>
                                <div className='information-wrap'>
                                    <div className='information-span'>
                                        <span>예매 및 관람 안내</span>
                                    </div>
                                    <p>
                                        온라인 개인예매는 관람일 14일 전부터 가능하며, 개인별 예매 가능한
                                        인원은 <br/>최대 4명 입니다.
                                    </p>
                                    <hr className='hr'/>
                                    <p>
                                        안전하고 쾌적한 관람을 위하여 반드시 예매 사항을 지켜주시기
                                        바라며, 방문이 어려우시면 다른 관람객을 위해 반드시 예매를
                                        취소해 주시기 바랍니다.
                                    </p>
                                    <hr className='hr'/>
                                    <p>
                                        선택하신 관람 시간부터 다음 관람 시간 전까지 입장 가능하며, 전시
                                        관람은 18시까지 가능합니다.
                                    </p>
                                    <hr className='hr'/>
                                    <p>
                                        마우리치오 카텔란 : WE 전시는 개인에 따라 민감한 내용을 포함할 수 있으며,
                                        특히 아동 청소년 관람객은 유의할 필요가 있으므로 관람에 참고하여 주시기
                                        바랍니다.
                                    </p>
                                    <hr className='hr'/>
                                    <p>
                                        주차장이 협소하여 만차 시 주차가 불가하오니 가급적 대중교통을 이용하여
                                        주시기 바랍니다.
                                    </p>
                                </div>
                                <div className='information-resbtn'>
                                    <button onClick={clickBtn}>
                                        예약하기
                                    </button>
                                    <Reserinfo isOpen={isOpen} onClose={closeModal}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
