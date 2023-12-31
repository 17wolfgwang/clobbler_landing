import React from 'react';
import './ServiceTeamPage.scss';
import Button from '../../components/Button/Button';

const ServiceTeamPage = () => {
    return (
        <div className='center serviceTeamPage'>
            <div className='bgBigBox'>
                <div className='diagonalBox diagonalBox0'></div>
                <div className='diagonalBox diagonalBox1'></div>
                <div className='diagonalBox diagonalBox2'></div>
                <div className='diagonalBox diagonalBox3'></div>
                <div className='diagonalBox diagonalBox4'></div>
                <div className='diagonalBox diagonalBox5'></div>
            </div>

            <div className='serviceTeamPageTitleSection'>
                <div className='serviceTeamPageTitle'>패션 스타일 튜너,</div>
                <div className='serviceTeamPageTitle'>CLOBBLER</div>
                <div className='serviceTeamPageSubTitleSection'>
                    <div className='serviceTeamPageSubTitle'>&#x2713; 패션 스타일 튜닝에 진심인 전문가들이 고객을 위해 열정을 다하고 있습니다.</div>
                    <div className='serviceTeamPageSubTitle'>&#x2713; 업계 최고 패션 수선 엔지니어들로 최상의 패션 리페어 서비스 제공합니다.</div>
                    <div className='serviceTeamPageSubTitle'>&#x2713; 섬세한 수선 기술과 다양한 아이디어를 통해 스타일을 돋보이게 합니다.</div>
                </div>
                <Button />
            </div>
            <div className='videoSection'>
                <div className='bgVideoSection'>
                    <div className='videoBtnSection'>
                        <div className='videoBtnRed'></div>
                        <div className='videoBtnYellow'></div>
                        <div className='videoBtnGreen'></div>
                    </div>
                    <img className="video" src="/images/team/tailor2.gif" alt="수선사" />
                </div>
            </div>
        </div>
    )
}

export default ServiceTeamPage;