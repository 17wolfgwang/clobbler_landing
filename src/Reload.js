import { useEffect } from 'react';

const ScrollToTopOnReload = () => {
    useEffect(() => {
        if (performance.navigation.type === 1) {
            // 페이지 리로드 시
            window.scrollTo(0, 0);
            window.location.href = '/';
        }
    }, []);

    return null;
};

export default ScrollToTopOnReload;