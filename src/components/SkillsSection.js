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
                <div className="skills-wrapper">
                    {
                        CONSTANTS.skills.skills_content.map((skillItem, index) => (
                            <div className="skill-container">
                                <div className="skill-icon-container">
                                    <div className="skill-circle">
                                        <div className="skill-icon">
                                            <img src={require("../assets/icons/" + skillItem.skill_icon)} alt={skillItem.skill_name} />

                                        </div>

                                    </div>

                                </div>
                                <div className="skill-name">{skillItem.skill_name}</div>
                                <div className="skill-content-container">
                                    {skillItem.skill_description}
                                </div>
                                <div className="skill-tools-container">
                                    {
                                        skillItem.skill_tools.map((skillTools, index) => (
                                            <div className='tool-name'>
                                                {skillTools}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }



                </div>

            </div>
        </div>

    )
}

export default SkillsSection;