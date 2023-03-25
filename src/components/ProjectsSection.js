import React from 'react';
import CONSTANTS from '../constants/textConstants.json';
import linkIcon from '../assets/icons/web_link.svg';
import githubIcon from '../assets/icons/github_logo.svg';
import './ProjectsSectionStyles.css';

const ProjectsSection = () => {


    return (
        <div className="page-wrapper">
            <div id="projects" >
                <div className="page-header">
                    {CONSTANTS.projects.section_title}
                </div>
                <div className="projects-wrapper">

                    {CONSTANTS.projects.project_content.map((projectItem) => (
                        <div className="project-item">
                            <div className="project-content-image-container">
                                <div className="project-content-container">
                                    <div className="project-title"> {projectItem.project_name} </div>
                                    <div className="project-description">
                                        <ul className='project-desc-list'>
                                            {projectItem.project_description.map((desItem) => (
                                                <li>{desItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="project-tools">
                                        Tools
                                        <div>
                                            {projectItem.tools_used.map((toolItem, index) => (
                                                (index !== projectItem.tools_used.length - 1 ? ' ' + toolItem + ',' : ' ' + toolItem)
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-image-container">
                                    <div className="project-image">
                                        <img src={require("../assets/images/" + projectItem.project_image_link)} alt={projectItem.project_name} />
                                    </div>
                                    <div className="project-links">
                                        {
                                            projectItem.project_demo_link.length > 0 &&
                                            <div className="demo-link">
                                                <a href={projectItem.project_demo_link} target="_blank" > <img src={linkIcon} alt="Demo link icon" /> Demo </a>
                                            </div>
                                        }

                                        <div className="code-link">
                                            <a href={projectItem.project_github_link} target="_blank"> <img src={githubIcon} alt="Github link icon" /> Code </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>

    )
}

export default ProjectsSection;