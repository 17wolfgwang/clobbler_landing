import React, { useState, useEffect } from 'react';
import './ServiceNumberPage.scss';

const CountingAnimation = ({ targetCount, duration }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        const animationDuration = Math.max(duration, 1000); // 최소 1초 지속 시간
        const animationStep = Math.ceil(targetCount / (animationDuration / 10));
        let startTimestamp = null;

        const animate = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;

            setCurrentCount((prevCount) => {
                const newCount = Math.min(
                    Math.round((progress / animationDuration) * targetCount),
                    targetCount
                );
                return newCount;
            });

            if (progress < animationDuration) {
                requestAnimationFrame(animate);
            }
        };

        const handleScroll = () => {
            const currentUrl = window.location.href;
            const lastChar = Number(currentUrl[currentUrl.length - 1]);

            if (lastChar === 3) {
                if (startTimestamp === null) {
                    // 애니메이션이 초기화되지 않은 경우에만 초기화 및 시작
                    startTimestamp = null;
                    requestAnimationFrame(animate);
                }
            } else {
                // 다른 페이지로 이동한 경우 애니메이션 초기화
                startTimestamp = null;
            }
        };

        window.addEventListener('popstate', handleScroll);

        return () => {
            window.removeEventListener('popstate', handleScroll);
            startTimestamp = null;
        };

    }, [targetCount, duration]);

    return <span className='number'>{currentCount}</span>;
};

export default CountingAnimation;