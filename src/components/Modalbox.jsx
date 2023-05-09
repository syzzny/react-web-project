import React, { useState, useEffect, useRef } from 'react'

import './css/Index.css'

import { Link } from 'react-router-dom'
import Modal from 'react-modal';
function Modalbox(props) {
    return (
        <div>
            <button className='heart-button'>
                관심전시 등록하기
                <img className='btnimg' src={`${process.env.PUBLIC_URL}/assets/img/heartbtn.png`} alt="" />
            </button>
        </div>
    )
}
// ArtworkInfo-------------------------------------------------------------------------------------------------------------
export function EnterModal(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '178px'
        },
    };
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
            <div className='modal_textwrap'>
                <p className='modal_text'>관심전시에 등록되었습니다.</p>
            </div>
            <div className='modal_button'>
                <button onClick={props.onClose}>확인</button>
                <button onClick={props.onClose}>관심전시 보러가기</button>
            </div>
        </Modal>
    )
}

export function DeleteModal(props){
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '178px'
        },
    };
    return(
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
            <div className='modal_textwrap'>
                <p className='modal_text'>관심 전시에서 삭제되었습니다.</p>
            </div>
            <div className='modal_button'>
                <button onClick={props.onClose}>확인</button>
            </div>
        </Modal>
    )
}


// ProgramInfo-------------------------------------------------------------------------------------------------------------
export function EnterProModal(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '178px'
        },
    };
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
            <div className='modal_textwrap'>
                <p className='modal_text'>프로그램 신청이 완료되었습니다.</p>
            </div>
            <div className='modal_button'>
                <button onClick={props.onClose}>확인</button>
            </div>
        </Modal>
    )
}

export function EnteredProModal(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '178px'
        },
    };
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
            <div className='modal_textwrap'>
                <p className='modal_text'>이미 신청된 프로그램입니다.</p>
            </div>
            <div className='modal_button'>
                <button onClick={props.onClose}>확인</button>
            </div>
        </Modal>
    )
}


// Reservation-------------------------------------------------------------------------------------------------------------
export function ReservPlace01(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '590px'
        },
    };
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
            <div className='modal_titlewrap'>
                <h3 className='modal_title'>B1 STORE</h3>
            </div>
            <div className='modal_img'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/rest01.jpg`} alt="" />
            </div>
            <div className='modal_text_info'>
                <p>
                    독립적이면서도 조화롭고 실용적이면서 예술적인 작품들이 어우러져 하나의 빛을 내고 있는 새로운 공간 리움스토어 입니다.<br></br><br></br>
                    국내외에서 활약하고 있는 작가들의 손끝에서 탄생한 감각적인 작품들이 가득한 공간으로 작품 하나하나가 주는 특별한 감동과 
                    환경을 생각하는 리움스토어를 느껴보실 수 있습니다.
                </p>
            </div>
            <div className='modal_button'>
                <button onClick={props.onClose}>확인</button>
            </div>
        </Modal>
    )
}
export function ReservPlace02(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '590px'
        },
    };
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
            <div className='modal_titlewrap'>
                <h3 className='modal_title'>B1 CAFE</h3>
            </div>
            <div className='modal_img'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/rest02.jpg`} alt="" />
            </div>
            <div className='modal_text_info'>
                <p>
                    각자의 길을 걷던 삼형제가 향기로운 커피에 반해 오늘까지 함께 조금씩 쌓아온 챔프 커피입니다.<br></br><br></br>
                    형제들과 함께하며 무엇보다 인생에서 중요한 가치, 마음의 나눔을 알게 되었습니다. 한 땀 한 땀 정성스런 손길, 한 방울 한 방울 흘린 
                    땀의 결실, 시간과 세상을 거스르는 공간 새로운 리움에서 수많은 거장의 작품들과 함께할 작은 여운을 나누고자 합니다.
                </p>
            </div>
            <div className='modal_button'>
                <button onClick={props.onClose}>확인</button>
            </div>
        </Modal>
    )
}
export function ReservPlace03(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '590px'
        },
    };
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
            <div className='modal_titlewrap'>
                <h3 className='modal_title'>B1 ROCKER</h3>
            </div>
            <div className='modal_img'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/rest03.jpg`} alt="" />
            </div>
            <div className='modal_text_info'>
                <p>
                    자율적으로 개인물품을 보관할 수 있으며, 귀중품이나 파손 위험이 있는 물품을 안전하게 보관하실 수 있습니다.<br></br><br></br>
                    A TYPE : W325mm * D380mm * H485mm <br/>
                    B TYPE : W384mm * D580mm * H475mm <br/>
                    C TYPE : W384mm * D580mm * H960mm
                </p>
            </div>
            <div className='modal_button'>
                <button onClick={props.onClose}>확인</button>
            </div>
        </Modal>
    )
}


// Reservationinfo-------------------------------------------------------------------------------------------------------------

export function Reserinfo(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '178px'
        },
    };
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={customStyles}>
        <div className='modal_textwrap'>
            <p className='modal_text'>예약이 완료되었습니다.</p>
        </div>
        <div className='modal_button'>
            <button onClick={props.onClose}>확인</button>
        </div>
    </Modal>
    )
}








export default Modalbox;