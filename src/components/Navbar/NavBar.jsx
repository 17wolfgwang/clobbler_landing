import React from 'react';
import './NavBar.scss';

import Button from '../Button/Button';

const NavBar = () => {

    return (
        <div className='center navBarWrap'>
            <div className='center navBar'>
                <div className='logo'>CLOBBLER</div>
                <div className='snsGroup'>
                    <Button />
                    <a className="snsIcon" href="https://clobbler.com/" target="_blank">
                        <img src="/images/homepage_Logo.svg" alt="homepage" />
                    </a>
                    <a className="snsIcon" href="/">
                        <img src="/images/youtube_Logo.svg" alt="youtube" />
                    </a>
                    <a className="snsIcon" href="https://www.instagram.com/clobbler_official/" target="_blank">
                        <img className="snsIcon" src="/images/instagram_Logo.svg" alt="instagram" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;