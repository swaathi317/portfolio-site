import React from 'react';
import CONSTANTS from '../constants/textConstants.json';


const SocialLinksBar = () => {

    return (

        <div id="social-link-wrapper">
            <ul className="social-item-list">
                {
                    CONSTANTS.social_links.map((socialItem) => (

                        <li> <a href={socialItem.link} target="_blank"> <img src={require("../assets/icons/" + socialItem.logo_name)} alt={socialItem.platform_name} /></a></li>

                    ))
                }


            </ul>
        </div>


    )
}

export default SocialLinksBar;