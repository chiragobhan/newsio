import React from 'react'
import 'antd/dist/antd.css';
import NewsSection from './NewsSection';

const News = () => {

    return (
        <div>
            <NewsSection category='top-headlines' query='country=in' topHeading='Top News' linkText='See More Headlines' results='15' />
            <NewsSection category='everything' query='q=trending india' topHeading='Trending in India' linkText='More Indian Trends' results='12' />
            <NewsSection category='everything' query='q=trending tech' topHeading='Tech Trends' linkText='More about Tech' results='12' />
        </div>
    )
}

export default News;