import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './ExperienceSectionStyles.css';

const ExperienceSection = (props) => {
    const [activeJob, setActiveJob] = useState("0");

    let screenWidth = props.screenWidth;



    const styledText = (text, keywords) => {
        return text.split(" ").map(word => {
            let trimmedWord = word.replace(/[,.\s]+$/, '');
            if (keywords.includes(trimmedWord)) {

                return <span className="highlight-job-text">{word + " "} </span>;
            } else {
                return word + " ";
            }
        })
    }



    return (
        <div className="page-wrapper">
            <div id="experience" >
                <div className="page-header">
                    {CONSTANTS.experience.section_title}
                </div>
                <div className="experience-outer-container">

                    {
                        CONSTANTS.experience.experience_details.map((jobItem) => (
                            <div className="experience-description">
                                <div className="role-and-company">
                                    {jobItem.job_name}
                                    <span className="highlight-job-text"> @ {jobItem.company_name}
                                    </span>
                                </div>
                                <div className="job-duration">
                                    {jobItem.job_duration}
                                </div>
                                <div className="job-description">
                                    <ul>
                                        {jobItem.job_description.map((descItem) => (
                                            <li>
                                                {styledText(descItem, jobItem.keywords_to_highlight)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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


            </div>
        </div>

    )
}

export default ExperienceSection;