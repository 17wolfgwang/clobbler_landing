import React from 'react';
import './NavBar.scss';

import Button from '../Button/Button';

const NavBar = () => {

    return (
        <div className='center navBarWrap'>
            <div className='center navBar'>
                <div className='logo'>CLOBBLER</div>
                <div className='snsGroup'>
                    <img className="snsIcon" src="/images/homepage_Logo.svg" alt="homepage" />
                    <img className="snsIcon" src="/images/youtube_Logo.svg" alt="youtube" />
                    <img className="snsIcon" src="/images/instagram_Logo.svg" alt="instagram" />
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default NavBar;