import React from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './BlogsSectionStyles.css';

const BlogsSection = () => {


    return (
        <div className="sectional-wrapper">
            <div id="blog" >
                <div className="section-header">
                    {CONSTANTS.blogs.section_title}
                </div>
                <div className="blogs-wrapper">


                    {CONSTANTS.blogs.blog_posts.map((blogItem) => (
                        <div className="articles-container">
                            <a href={blogItem.blog_link} target="_blank" >
                                <div className="blog-post">
                                    <div className="blog-image-container">
                                        <img src={require("../assets/images/" + blogItem.blog_image_link)} alt={blogItem.blog_title} />
                                    </div>
                                    <div className="blog-title-container">
                                        {blogItem.blog_title}
                                    </div>
                                    <div className="blog-description-container">
                                        {blogItem.blog_description}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}



                </div>
                <div className="more-blogs-container">
                    <a href={CONSTANTS.blogs.more_blogs_link} > More Blog Posts </a>
                </div>
            </div>
        </div>

    )
}

export default BlogsSection;