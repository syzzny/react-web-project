
import React, { useState, useEffect, useRef } from 'react'

import './css/Index.css'

import { Link } from 'react-router-dom'
import Modal from 'react-modal';
export default function Modalbox() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [cancleModalOpen, setCancleModalOpen] = React.useState(false);
    const [buttonText, setButtonText] = useState('관심전시 등록');
    const subtitleRef = useRef(null); // Ref 생성

    /*
        Modal 속성 
        - isOpen: modal이 화면에 보일지 여부
        - onRequestClose: esc 키를 누르거나 창 밖의 공간을 클릭할때 종료에 필요한 함수정의
    */
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        if (subtitleRef.current) {
            // null 체크
            subtitleRef.current.style.color = '#f00';
        }
    }

    function closeModal() {
        setIsOpen(false);
        setCancleModalOpen(false);
    }

    function toggleButtonText() {
        if (buttonText === '관심전시 등록') {
            setButtonText('관심전시 등록취소');
            setCancleModalOpen(false); // 취소 모달 창 닫기
            setIsOpen(true); // 등록 모달 창 열기
        } else {
            setButtonText('관심전시 등록');
            setIsOpen(false); // 등록 모달 창 닫기
            setCancleModalOpen(true); // 취소 모달 창 열기
        }
    }

    // function afterCloseModal() {
    //     toggleButtonText();
    // }

    function onClickCancel() {
        if (buttonText === '관심전시 등록취소') {
            setIsOpen(false);
            setCancleModalOpen(true);
            setButtonText('관심전시 등록');
        } else {
            setIsOpen(false);
            setButtonText('관심전시 등록취소');
        }
    }

    useEffect(() => {
        const button = document.querySelector('.heart-button');
        if (button) {
            if (buttonText === '관심전시 등록') {
                button.classList.remove('heart-button-active');
            } else {
                button.classList.add('heart-button-active');
            }
        }
    }, [buttonText]);

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
        <div>
            {cancleModalOpen ? (
                <Modal
                    isOpen={cancleModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel='Cancle Modal'
                >
                    <div className='modal_textwrap'>
                        <p className='modal_text'>관심전시에서 삭제되었습니다.</p>
                    </div>
                    <div className='modal_button'>
                        <button onClick={closeModal}>확인</button>
                        <button onClick={onClickCancel}>관심전시 보러가기</button>
                    </div>
                </Modal>
            ) : (
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='modal_textwrap'>
                        <p className='modal_text'>관심전시에 등록되었습니다.</p>
                    </div>
                    <div className='modal_button'>
                        <button onClick={closeModal}>확인</button>
                        <button onClick={onClickCancel}>관심전시 보러가기</button>
                    </div>
                </Modal>
            )}
        </div>
    )
}
