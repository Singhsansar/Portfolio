import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import './Banner.css';

const Banner = () => {
    return (
        <section id='home' className='w-full pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-48 lg:pb-20 flex flex-row font-titleFont border-b-[1px] border-b-black responsive-banner'>
            <LeftBanner />
            <RightBanner />
        </section>

    );
}

export default Banner;