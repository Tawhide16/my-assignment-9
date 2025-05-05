import React from 'react';
import Hero from './Hero';
import EventCard from './EventCard';

const Home = () => {
    return (
        <div className='lg:px-8 my-5'>
            <Hero></Hero>
            <EventCard></EventCard>
        </div>
    );
};

export default Home;