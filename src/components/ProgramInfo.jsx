import React, { useState, useEffect } from 'react'

import './css/Index.css'

import { Link ,useLocation} from 'react-router-dom'
import { EnterProModal } from './Modalbox';


export default function ProgramInfo() {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (prevScrollY < currentScrollY && visible) {
                setVisible(false);
            } else if (prevScrollY > currentScrollY && !visible) {
                setVisible(true);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY, visible]);

    const header = visible ? "header" : "header header--hidden";


     // data context 가져옴
    const locaton = useLocation();
    const program = locaton.state;

    // 모달 -------------------------------------------------------------------------------
    const [isOpen, setIsOpen] = useState(false);

    // open modal
    const openModal = () =>{
        setIsOpen(true);
    }

    // close modal
    const closeModal = () =>{
        setIsOpen(false);
    }
    


    return (
        <div className='wrap'>
            <header className={header}>
                <div className='header_inner'>
                    <Link to={'/'}>

                        <div id='logo'>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/logo2.png`} alt="" />
                        </div>
                        
                    </Link>
                    <nav className='menu-container'>
                        <ul id='menu'>
                            <li><Link to={'/'}>전시</Link></li>
                            <li><Link to={'/'}>프로그램</Link></li>
                            <li><Link to={'/'}>공간</Link></li>
                            <li><Link to={'/reservation'}>예약</Link></li>
                        </ul>
                    </nav>
                    <div className='sub-menu'>
                        <ul>
                            <li className='checkart'><Link to={'/heartartwork'}><span>관심전시</span></Link></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className='programinfo-wrap'>
                <div className='programinfo-title'>
                    <h3>{program.infotitle}</h3>
                </div>
                <div className='programinfo-info'>
                    <div className='infoimg'>
                        <img src={program.img} alt="" />
                    </div>
                    <div className='programinfo-text'>
                        <div className='programinfo-text-span'>
                            <span>프로그램 안내</span>
                        </div>
                        <p>
                            {program.infotext}
                        </p>
                        <ul className='programinfo-list'>
                            <li>일시: {program.date}</li>
                            <li>장소: {program.place}</li>
                            <li>강연자: {program.instructor}</li>
                            <li>대상: {program.people}</li>
                            <li>참가비: {program.price}</li>
                            <li>접수: 2023. 4 .12(수) 14:00 부터 리움미술관 홈페이지 선착순 신청 <br />
                                *[마감] 멤버십 사전 예약:<br />
                                4. 11.(화) 14:00부터 선착순 20명<br />
                                멤버십 사전 예약 페이지 바로가기</li>
                        </ul>
                    </div>
                    <button className='program-btn' onClick={openModal}>
                        신청하기
                        <img className='btnimg' src={`${process.env.PUBLIC_URL}/assets/img/heartbtn.png`} alt="" />
                    </button>
                    <EnterProModal isOpen={isOpen} onClose={closeModal}/>
                </div>
            </div>
        </div>
    )
}
