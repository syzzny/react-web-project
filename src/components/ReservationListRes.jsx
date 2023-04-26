import React from 'react'

export default function ReservationListRes() {
    return (
        <div className='wrap'>
            <div className='MyReserArt'>
                <div className='MyReserArt-img'>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/poster01.jpg`} alt="" />
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
                        <span>[기획전] 마우리치오 카텔란</span>
                    </div>
                    <div className='date'>
                        <span>2023.04.12(수) / 일반 1</span>
                    </div>
                    <div className='reservation-date'>
                        <span>예약일 2023-04-11 16:43</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
