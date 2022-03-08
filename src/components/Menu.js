
import React from 'react';
import './Menu.css';

const Menu = () => {
    return (<div className='menu-ct'>
        <ul className={'menu'}>
            <li className={'item'}><a>Home</a></li>
            <li className={'item'}><a>Map</a></li>
            <li className={'item'}><a>About</a></li>
        </ul>
    </div>);
}

export default Menu;