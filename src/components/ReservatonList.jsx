import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';


import './css/Index.css'
import NavReservation from './NavReservation'
import ReservationListAll from './ReservationListAll'
import ReservationListRes from './ReservationListRes'
import ReservationListDelete from './ReservationListDelete'

export default function ReservatonList() {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }


    // 예약정보 가져오기
    const handleReserve = (selectedDate, count) => {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        console.log(`Reserved ${count} items on ${formattedDate}`);
    };

    return (
        <div className='reservation_wrap'>
            <div className='animated-title'>
                <div className='track'>
                    <p className='content'>
                        미술관 내 관람객 안전을 위하여 100% 사전 예약제로 운영중이며, 예약자 본인이 아닌경우 입장이
                        제한될 수 있습니다. *관람을 원하는 전시를 개별적으로 각각 예약해주시길 바랍니다.
                    </p>
                </div>
            </div>
            <NavReservation />

            <main id='ReservationList_main'>
                <div className='reservationList-img'>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/result.jpg`} alt="" />
                </div>

                <div className='reservationlist'>
                    <div className='reservationlist-span'>
                        <span>예매/예약 내역</span>
                    </div>
                    <div className='reservationlist_wrap'>

                        <ul className='tabs'>
                            <li className={activeTab === 'all' ? 'active' : ''} onClick={() => handleTabClick('all')}>
                                전체
                            </li>
                            <li className={activeTab === 'reservation' ? 'active' : ''} onClick={() => handleTabClick('reservation')}>
                                예매/예약
                            </li>
                            <li className={activeTab === 'cancel' ? 'active' : ''} onClick={() => handleTabClick('cancel')}>
                                취소
                            </li>
                        </ul>
                        <div className='tab-content'>
                            {activeTab === 'all' && (
                                <ReservationListAll handleReserve={handleReserve}/>
                            )}
                            {activeTab === 'reservation' && (
                                <ReservationListRes handleReserve={handleReserve}/>
                            )}
                            {activeTab === 'cancel' && (
                                <ReservationListDelete />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
