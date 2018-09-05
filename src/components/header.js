import React from 'react';

export function Header() {
    return (
        <div className='header'>
            <h1 className='header__title'>Welcome to HOA Manager!</h1>
            <p className='header__subtitle'>Please login to continue</p>
        </div>
    )
}

export function HeaderBar({hideBar}) {
    if(hideBar) {
        return <div></div>
    } else {
        return <div className='bar'></div>
    }
}