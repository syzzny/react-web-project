import React, { useState, useEffect } from 'react'

import './css/Index.css'

import { Link } from 'react-router-dom'



export default function ProgramInfo() {
    // useState 훅으로 'prevScrollY'와 'visible' 상태값 초기화
    // prevScollY : 스크롤 전 위치, visible : 헤어 표시 여부를 나타내는 불리언 값
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    // useEffect 훅을 사용하여 스크롤 이벤트 등록
    useEffect(() => {
        /* handleScroll 함수는 현재 스크롤 위치를 계산하여 'prevScrollY' 값을 업데이트하고,
            현재 스크롤 방향에 따라 visible 값을 변경*/
        // 스크롤 방향이 아래쪽이면 visible 값을 false로 설정하여 헤더 숨기기
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (prevScrollY < currentScrollY && visible) {
                setVisible(false);
            } else if (prevScrollY > currentScrollY && !visible) {
                setVisible(true);
            }

            setPrevScrollY(currentScrollY);
        };

        // 이벤트 리스너 등록
        window.addEventListener("scroll", handleScroll);

        // 이벤트 등록 해제 함수를 반환하여 컴포너트가 언마운트 될때 이벤트 리스너 삭제
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY, visible]);

    // 'visible' 값에 따라 클래스 이름을 동적으로 할당하여 헤더의 표시여부 결정
    // true인 경우 "header" false인 경우 "header header--hidden" 클래스 이름이 할당
    const header = visible ? "header" : "header header--hidden";
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
                            <li className='checkart'><a href=""><span>관심전시</span></a></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className='programinfo-wrap'>
                <div className='programinfo-title'>
                    <h3>[MAURIZIO CATTELAN] WE 연계 [작가연구 강연 시리즈
                        2: 마우리치오 카텔란, 포스트모던 디자인의 의태에서 사회적
                        맥란/관계 특정성의 게임으로 ]
                    </h3>
                </div>
                <div className='programinfo-info'>
                    <div className='infoimg'>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/program02.jpg`} alt="" />
                    </div>
                    <div className='programinfo-text'>
                        <div className='programinfo-text-span'>
                            <span>프로그램 안내</span>
                        </div>
                        <p>
                            가구 공장에서 본 이탈리아 포스트모던 디자인의 사례를 참고해 쓸모없는 가구를
                            제작하기 시작했던 청년 노동자 마우리치오 카텔란. 그는 왜, 그리고 어떻게 현대
                            미술계를 가로지르는 판단 유예적 유형의 작가로 거듭나게 됐을까요? [작가연구
                            강연 시리즈 2 : 마우리치오 카텔란, 포스트모던 디자인의 의태에서 사회적 맥락/
                            관계 특정성의 게임으로] 에서는 일련의 도전과 적응 과정에서 돌출했던 카텔란
                            의 주요 작업을 시간순으로 배치해, 그가 제도 비평 미술을 비판적으로 재활용하
                            여 미술계 전반을 풍자해 온 여정을 살펴봅니다.
                        </p>
                        <ul className='programinfo-list'>
                            <li>일시: 2023.04.26(수) 16:00 - 17:30</li>
                            <li>장소: 리움 강당</li>
                            <li>강연자: 이정우</li>
                            <li>대상: 160명</li>
                            <li>참가비: 무료</li>
                            <li>접수: 2023. 4 .12(수) 14:00 부터 리움미술관 홈페이지 선착순 신청 <br />
                                *[마감] 멤버십 사전 예약:<br />
                                4. 11.(화) 14:00부터 선착순 20명<br />
                                멤버십 사전 예약 페이지 바로가기</li>
                        </ul>
                    </div>
                    <button className='program-btn'>
                        신청하기
                        <img className='btnimg' src={`${process.env.PUBLIC_URL}/assets/img/heartbtn.png`} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
