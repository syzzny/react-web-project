import React from 'react'
import DataContext from '../context/DataContext';
import { useContext } from 'react';

export default function ReservationListAll(props) {

    const { state } = useContext(DataContext);
    const { reservList } = state;

    return (

        <div className='wrap'>
            <div>
                {reservList.length === 0 && <p>예매 내역이 없습니다.</p>}
                    {
                        state.reservList.map((reserva, index) => (
                            <div key={index}  className='MyReserArt'>
                                <div className='MyReserArt-img'>
                                    <img src={reserva.img} alt="" />
                                </div>
                                <div className='MyReserArt-info'>
                                    <div className='box'>
                                        <div className='box-info'>
                                            개인
                                        </div>
                                        <div className='box-state'>
                                            예매완료
                                        </div>
                                    </div>
                                    <div className='title'>
                                        <span>{reserva.title}</span>
                                    </div>
                                    <div className='date'>
                                        <span>2023.04.12(수) / {reserva.counter}명</span>
                                    </div>
                                    <div className='reservation-date'>
                                        <span>예약일 {reserva.date}</span>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                
            </div>
        </div>
    )
}
