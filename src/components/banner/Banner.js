import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
    return (
        <section id='home' className='w-full py-20 flex-row flex font-titleFont border-b-[1px] border-b-black responsive-banner'>
            <LeftBanner />
            <RightBanner />
        </section>
    );
}

export default Banner;
