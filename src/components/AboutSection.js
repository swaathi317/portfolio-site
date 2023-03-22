import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/profile_image.jpg';
import CONSTANTS from '../constants/textConstants.json';

import './AboutSectionStyle.css';

const AboutSection = (props) => {

    let screenWidth = props.screenWidth;

    return (

        <div id="about" className="sectional-wrapper">
            <div className="about-wrapper">
                <div className="about-content-container">
                    <div className="name-container">
                        <div className="first-name-container">
                            {CONSTANTS.about.first_name}
                        </div>
                        <div className="last-name-container">
                            {CONSTANTS.about.last_name}
                        </div>
                    </div>
                    <div className="position-container">
                        {CONSTANTS.about.roles}
                    </div>
                    <div className="introduction-container">
                        {CONSTANTS.about.introduction_content}
                    </div>
                </div>
                <div className="about-image-container">
                    <div className="image-square">
                        <div className="image-container">
                            <img src={profileImage} alt={CONSTANTS.about.first_name} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat-download-container">
                <div className="stat-container">

                    {CONSTANTS.about.stats.map((statItem) => (
                        <div className="stat-item">
                            <div className="stat-number"> {statItem.stat_number} </div>
                            <div className="stat-description"> {statItem.stat_description} </div>
                        </div>
                    ))
                    }
                </div>
                <div className="download-container">
                    < a href={CONSTANTS.about.resume_download_link} target="_blank" >
                        <div className="download-button">
                            {CONSTANTS.about.download_button_text}
                        </div>
                    </a>
                </div>

                {
                    screenWidth < 850 &&
                    <div className="social-media-container">

                        {
                            CONSTANTS.social_links.map((socialItem) => (

                                <div> <a href={socialItem.link} target="_blank"> <img src={require("../assets/icons/" + socialItem.logo_name)} alt={socialItem.platform_name} /></a></div>

                            ))
                        }

                    </div>
                }

            </div>
        </div>


    )
}

export default AboutSection;