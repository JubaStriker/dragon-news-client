import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const newsCategory = useLoaderData()
    console.log(newsCategory);
    return (
        <div>
            <h4 className='mb-5'>This category has {newsCategory.length} news</h4>
            {newsCategory.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)}
        </div>
    );
};

export default Category;