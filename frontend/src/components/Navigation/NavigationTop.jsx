import React from 'react'
import RefreshButton from './Buttons/RefreshButton';
import Avatar from './Avatar';
import Search from './Search';

const NavigationTop = () => {
    return (
        <div className='navigation-top'>
            <RefreshButton />
            <Search />
            <Avatar />
        </div>
    )
}

export default NavigationTop