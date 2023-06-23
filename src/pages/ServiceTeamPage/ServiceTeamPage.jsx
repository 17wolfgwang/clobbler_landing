import React from 'react';
import './ServiceTeamPage.scss';
import Button from '../../components/Button/Button';

const ServiceTeamPage = () => {
    return (
        <div className='center serviceTeamPage'>
            <div className='bgBigBox'>
            </div>

            <div className='serviceTeamPageTitleSection'>
                <div className='serviceTeamPageTitle'>패션 스타일 튜너,</div>
                <div className='serviceTeamPageTitle'>CLOBBLER</div>
                <div className='serviceTeamPageSubTitle'>&#x2713; 패션 스타일 튜닝에 진심인 전문가들이 고객을 위해 열정을 다하고 있습니다.</div>
                <div className='serviceTeamPageSubTitle'>&#x2713; 업계 최고 패션 수선 엔지니어들로 최상의 패션 리페어 서비스 제공합니다.</div>
                <div className='serviceTeamPageSubTitle'>&#x2713; 섬세한 수선 기술과 다양한 아이디어를 통해 스타일을 돋보이게 합니다.</div>
                <Button />
            </div>
            <div className='videoSection'>
                <div className='bgVideoSection'>
                    <div className='videoBtnSection'>
                        <div className='videoBtnRed'></div>
                        <div className='videoBtnYellow'></div>
                        <div className='videoBtnGreen'></div>
                    </div>
                    <iframe className="video" src="https://www.youtube.com/embed/B-RMhavlRGs?autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default ServiceTeamPage;