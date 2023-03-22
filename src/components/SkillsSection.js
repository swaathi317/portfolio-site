import React from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './SkillsSectionStyles.css';

const SkillsSection = () => {


    return (
        <div className="sectional-wrapper">
            <div id="skills" >
                <div className="section-header">
                    {CONSTANTS.skills.section_title}
                </div>
                <div className="skills-badge-wrapper">
                    <div className="skills-description-badges">
                        <div className="skills-description">

                            {CONSTANTS.skills.skills_description}
                        </div>

                        <div className="badges-wrapper">

                            {CONSTANTS.skills.badges.map((badgeItem) => (
                                <div className="badge-container">
                                    <a href={badgeItem.badge_external_link} _target="_blank" >
                                        <div className="badge-image-container">
                                            <img src={require("../assets/images/" + badgeItem.badge_image_link)} alt={badgeItem.badge_name} />
                                        </div>
                                        <div className="badge-name-container">
                                            {badgeItem.badge_name}
                                        </div>
                                    </a>
                                </div>
                            ))

                            }



                        </div>


                    </div>
                    <div className="skills-wrapper">
                        {CONSTANTS.skills.skills_content.map((skillItem) => (
                            <div className="skill-item">
                                <div className="skill-title">
                                    {skillItem.skill_name}
                                </div>
                                <div className="skill-tools">
                                    {
                                        skillItem.skill_tools.map((skillToolItem) => (
                                            <div className="skill-tool-item">
                                                {skillToolItem}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}

                    </div>


                </div>

            </div>
        </div>

    )
}

export default SkillsSection;