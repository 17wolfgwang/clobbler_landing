import React from 'react';
import './NavBar.scss';

import Button from '../Button/Button';

const NavBar = () => {
    window.addEventListener('scroll', function () {
        console.log(window.scrollY);
    });
    return (
        <div className='center navBarWrap'>
            <div className='center navBar'>
                <div className='logo'>CLOBBLER</div>
                <div className='snsGroup'>
                    <img class="snsIcon" src="/images/homepage_Logo.svg" alt="homepage" />
                    <img class="snsIcon" src="/images/youtube_Logo.svg" alt="youtube" />
                    <img class="snsIcon" src="/images/instagram_Logo.svg" alt="instagram" />
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default NavBar;