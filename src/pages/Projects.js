import React, { useState, useEffect } from 'react';

//import section components
import Header from '../components/Header';
import SocialLinksBar from '../components/SocialLinksBar';
import ProjectsSection from '../components/ProjectsSection';



const Projects = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="body-wrapper">

                <Header screenWidth={screenWidth} />
                <SocialLinksBar />
                <div className="content-wrapper">

                    <ProjectsSection screenWidth={screenWidth} />

                </div>
                <footer> Designed & Developed by Swaathi </footer>
            </div>

        </>
    )
}

export default Projects;