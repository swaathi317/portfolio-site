import React, { useState, useEffect } from 'react';

//import section components
import Header from '../components/Header';
import SocialLinksBar from '../components/SocialLinksBar';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import BlogsSection from '../components/BlogsSection';
import RecommendationsSection from '../components/RecommendationsSection';


const Home = () => {
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

                    <AboutSection screenWidth={screenWidth} />
                    <SkillsSection />
                    <BlogsSection />
                    <RecommendationsSection screenWidth={screenWidth} />
                </div>
                <footer> Designed & Developed by Swaathi </footer>
            </div>

        </>
    )
}

export default Home;