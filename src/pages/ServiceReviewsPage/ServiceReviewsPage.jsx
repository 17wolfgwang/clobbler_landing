import React from 'react';
import './ServiceReviewsPage.scss';


const ServiceReviewsPage = () => {
    return (
        <div className='center serviceReviewsPage'>
            <div className='reviewsSection'>
                <div className='reviews'>
                    금새 커버린 아이들 <span className='reviewsPoint'>"교복"</span> 걱정

                </div>
                <div className='reviews'>
                    어느새 작아져버린 비싼 <span className='reviewsPoint'>"정장"</span>

                </div>
                <div className='reviews'>
                    버리기 아까운 옷장 속<span className='reviewsPoint'>"명품"</span> 옷

                </div>
            </div>
            <div className='bgBox'>
                <div className='bgLineBox'>
                    <div className='bgLineGold1'></div>
                    <div className='bgLineNavy1'></div>
                    <div className='bgLineGold2'></div>
                    <div className='bgLineNavy2'></div>
                    <div className='bgLineGold3'></div>
                    <div className='bgLineNavy3'></div>
                </div>

            </div>
        </div>
    )
}

export default ServiceReviewsPage;