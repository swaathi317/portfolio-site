import React, { useState, useEffect } from 'react';

//import section components
import Header from '../components/Header';
import SocialLinksBar from '../components/SocialLinksBar';
import ExperienceSection from '../components/ExperienceSection';



const Work = () => {
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

                    <ExperienceSection screenWidth={screenWidth} />

                </div>
                <footer> Designed & Developed by Swaathi </footer>
            </div>

        </>
    )
}

export default Work;