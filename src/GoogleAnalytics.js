import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

function GoogleAnalytics() {
    useEffect(() => {
        // Google Analytics 초기화
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

        // 페이지 뷰 이벤트 전송
        ReactGA.pageview(window.location.pathname);

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', trackScrollEvent);

        return () => {
            // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
            window.removeEventListener('scroll', trackScrollEvent);
        };
    }, []);

    const trackScrollEvent = () => {
        // 현재 스크롤 위치 등의 정보 추적
        // ...

        // Google Analytics 이벤트 추적
        ReactGA.event({
            category: 'Scroll',
            action: 'Page Scrolled',
            label: 'Scrolled to Section X'
        });
    };

    return null;
}

export default GoogleAnalytics;