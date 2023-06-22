import React from 'react';
import './ServiceMainPage.scss';
import Button from '../../components/Button/Button';

const ServiceMainPage = () => {
    return (
        <div className='center serviceMainPage'>
            <div className='headingSection'>
                <div className='heading'>옷 수선 전문가의 스타일 튜닝,</div>
                <div className='heading'>완벽한 핏 찾아드립니다.</div>

            </div>
            <Button />
            <div className='downloadSection'>

                <div>APP 다운로드 링크1</div>
                <div>APP 다운로드 링크2</div>
                <div>QR 다운로드 링크</div>
            </div>
        </div>
    )
}

export default ServiceMainPage;