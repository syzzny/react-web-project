import React, { useState, useEffect } from 'react'

import './css/Index.css'
import { Link,NavLink } from 'react-router-dom'


export default function NavReservation() {
    return (
        <div>
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
                            <li><NavLink to='/reservation' className={({ isActive }) => (isActive ? "menulink on" : "menulink")}>개인예매</NavLink></li>
                            <li><NavLink to='/reservationlist' className={({ isActive }) => (isActive ? "menulink on" : "menulink")}>예매내역</NavLink></li>
                        </ul>
                    </nav>
                    <div className='sub-menu'>
                        <ul>
                            <li className='checkart'><a href=""><span>관심전시</span></a></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                    <div className='mobile-menu-container'>
                            <li><NavLink to='/reservation' className={({ isActive }) => (isActive ? "menulink on" : "menulink")}>개인예매</NavLink></li>
                            <li><NavLink to='/reservationlist' className={({ isActive }) => (isActive ? "menulink on" : "menulink")}>예매내역</NavLink></li>
                    </div>
                </div>
            </header>
        </div>
    )
}