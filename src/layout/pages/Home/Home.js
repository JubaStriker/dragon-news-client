import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1 className='mb-3'>Dragon News tells you all...</h1>
            <Player
                src='https://assets8.lottiefiles.com/packages/lf20_2LdLki.json'
                className="player" style={{ width: '400px', height: '400px' }}
                loop
                autoplay />
            <h4 className='mb-5'>The number of total news: {allNews.length}</h4>
            {allNews.map((news) => <NewsSummeryCard key={news._id} news={news} ></NewsSummeryCard>)}
        </div>
    );
};

export default Home;