import React from 'react';
import './ServiceFooterPage.scss';
import Button from '../../components/Button/Button';

const ServiceFooterPage = () => {
    return (
        <div className='center serviceFooterPage'>
            <div className='lastTitleSection'>
                <div className='lastTitle'>옷수선리폼은</div>
                <div className='lastTitle'>언제나</div>
                <div className='lastTitle'>클로블러에게</div>
                <Button />
            </div>

            <div className='businessPartnerSection'>
                <div class="businessPartnerTitle">Partners</div>
                <div className='businessPartnerGrid'>
                    <div className='businessPartner clothAssosiation'>
                        <img className="clothAssosiationLogo" src="/images/partners/clothAssosiationLogo.jpeg" alt="의류협회" />
                        &nbsp;&nbsp;대한의류수선리폼협회
                    </div>
                    <div className='businessPartner'>
                        <img className="yonseiLogo" src="/images/partners/yonseiLogo.png" alt="연세대학교" />
                        &nbsp;연세대학교
                    </div>
                    <div className='businessPartner'>
                        <img className="clofosLogo" src="/images/partners/clofosLogo.png" alt="클로포스" />
                        &nbsp;클로포스 Clofos
                    </div>
                </div>


            </div>
            <div className='footerSection'>
                <div className='footerTitle'>파티웨이브</div>
                <div className='footerTitle'>서울시 송파구 위례성대로 2 장은빌딩 2층</div>
                <div className='footerTitle'>대표 번호 : 010-0000-000</div>
                <div className='footerTitle'>clobbler.com</div>
                <div className='footerTitle'>admin@clobbler.com</div>
                <div className='footerTitle'>박소담</div>
                <div className='footerTitle'>000@clobbler.com</div>
            </div>
        </div>
    )
}

export default ServiceFooterPage;