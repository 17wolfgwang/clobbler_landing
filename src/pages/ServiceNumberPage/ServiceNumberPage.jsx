import React from 'react';
import './ServiceNumberPage.scss';
import CountingAnimation from './CountingAnimation';

const ServiceNumberPage = () => {
    return (
        <div className='center serviceNumberPage'>
            <div className='serviceNumberPageTitle'>숫자로 입증하는 <br></br>수선/리폼서비스</div>
            <div className='serviceNumberPageSubTitle'>신뢰성, 전문성, 속도로 고객을 만족시키다.</div>
            <div className='numberSection'>
                <div className='numberDescTxt'>작업 정확도</div>
                <div>
                    <CountingAnimation targetCount={99} duration={2000} /><span> %</span>
                </div>
                <div className='numberDescTxt'>고객 만족도</div>
                <div>
                    <CountingAnimation targetCount={96} duration={2000} /><span> %</span>
                </div>
                <div className='numberDescTxt'>신속한 작업</div>
                <div>
                    <CountingAnimation targetCount={48} duration={2000} /><span> 시간</span>
                </div>
                <div className='numberDescTxt'>평균 업계 경력</div>
                <div>
                    <CountingAnimation targetCount={30} duration={2000} /><span> 년</span>
                </div>
                <div className='numberDescTxt'>이용 고객 수</div>
                <div>
                    <CountingAnimation targetCount={500} duration={2000} /><span>+</span>
                </div>
                <div className='numberDescTxt'>디자이너 총 작업 수</div>
                <div>
                    <CountingAnimation targetCount={10000} duration={2000} /><span> +</span>
                </div>
                <div className='numberDescTxt'>신속한 문의 응답</div>
                <div>
                    <CountingAnimation targetCount={15} duration={2000} /><span>분</span>
                </div>
                <div className='numberDescTxt'>광범위한 수선 종류</div>
                <div>
                    <CountingAnimation targetCount={100} duration={2000} /><span>+</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceNumberPage;