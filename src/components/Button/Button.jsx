import React from 'react';
import './Button.scss';

const Button = () => {
    return (
        <>
            <button className='reserveBtn'><a id="btnLinkId" className="btnLinkClass" href="http://pf.kakao.com/_gpeGxj/chat" target='_blank'>서비스 예약하기</a></button>
        </>
    )
}

export default Button;