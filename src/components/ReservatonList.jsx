import React, { useState, useEffect } from 'react'

import './css/Index.css'
import NavReservation from './NavReservation'

export default function ReservatonList() {
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
            <NavReservation/>
        </div>
    )
}
