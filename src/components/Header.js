import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/menu_icon.svg';
import closeIcon from '../assets/icons/close_icon.svg';
import CONSTANTS from '../constants/textConstants.json';

import './HeaderStyle.css';

const Header = (props) => {

    const [activeTab, setActiveTab] = useState('about');
    const [openMenu, setOpenMenu] = useState(false);

    let screenWidth = props.screenWidth;


    return (

        <div id="header-wrapper">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt={CONSTANTS.header.logo_alt_text} />
                </div>
                {screenWidth >= 850 &&
                    <div className="menu-container">
                        {
                            CONSTANTS.header.menu_items.map((menuItem) => (

                                <div className={activeTab === menuItem ? "menu-item is-active" : "menu-item"} onClick={() => setActiveTab(menuItem)}>
                                    <Link to={"/" + menuItem}> {menuItem} </Link>
                                </div>

                            ))
                        }
                    </div>
                }

                {
                    screenWidth < 850 &&
                    <>

                        <div className="menu-icon-container" onClick={() => setOpenMenu(!openMenu)}>

                            <img src={openMenu === false ? menuIcon : closeIcon} alt='Menu icon' />
                        </div>


                        {openMenu &&

                            <div className="menu-container">
                                {
                                    CONSTANTS.header.menu_items.map((menuItem) => (

                                        <div className={activeTab === menuItem ? "menu-item is-active" : "menu-item"} onClick={() => { setActiveTab(menuItem); setOpenMenu(!openMenu) }}>
                                            <Link to={"/" + menuItem}> {menuItem} </Link>
                                        </div>

                                    ))
                                }
                            </div>

                        }

                    </>
                }
            </div>
        </div>


    )
}

export default Header;