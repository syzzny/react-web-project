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


export default Modalbox;