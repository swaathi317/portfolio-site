import React from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './BlogsSectionStyles.css';

const RecommendationsSection = (props) => {
    let screenWidth = props.screenWidth;

    return (
        <div className="sectional-wrapper">
            <div id="recommendations" >
                <div className="section-header">
                    {CONSTANTS.recommendations.section_title}
                </div>
                <div className="recommendations-wrapper">

                    {CONSTANTS.recommendations.recommendation_content.map((recItem) => (
                        <div className="rec-item">
                            <div className="rec-content"> {' " ' + recItem.recommendation_content + ' "'} </div>
                            <div>
                                <div className="rec-author-name"> {recItem.giver_name} </div>
                                <div className="rec-author-role"> {recItem.giver_role} </div>
                                <div className="rec-author-company"> {recItem.given_company}  </div>
                            </div>
                        </div>
                    ))}

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

export default RecommendationsSection;