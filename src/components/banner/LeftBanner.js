import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Web Developer.', 'Machine Learning Engineer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className='w-full min-w-[50%] md:w-1/2 flex flex-col gap-8 md:gap-16 px-4 md:px-8'>
            <div className='flex flex-col gap-2 md:gap-3'>
                <h4 className='text-lg font-normal text-gray-400 transition-transform duration-300 ease-in-out hover:scale-105'>
                    WELCOME TO MY WORLD
                </h4>
                <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight md:leading-snug transition-transform duration-500 ease-in-out hover:translate-x-1'>
                    Hi, I'm{" "}
                    <span className='text-designColor capitalize'>
                        Nikhil kumar singh
                    </span>
                </h1>
                <h2 className='text-2xl md:text-3xl font-bold text-white leading-tight md:leading-snug transition-all duration-500 ease-in-out hover:scale-110 hover:text-designColor'>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className=' text-justify text-base font-bodyFont leading-6 tracking-wide text-gray-300 hover:text-white transition-all duration-300 ease-in-out hover:tracking-wider'>
                    I am a skilled and dedicated Machine Learning Engineer.
                    With a passion for leveraging artificial intelligence to solve complex problems,
                    I bring a wealth of expertise and experience to the field.
                </p>
                <div className='flex justify-center items-center bg-white max-w-[30%] py-2 rounded-lg px-3 border-r-4 border-designColor hover:bg-designColor hover:border-transparent transition-colors duration-300 ease-in-out'>
                    <a
                        href='/nikhils_resume.pdf'
                        download="nikhils_resume.pdf"
                        className='relative text-black font-bold text-sm md:text-base hover:text-white transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out'
                    > Resume
                    </a>
                </div>
            </div>

            <div className='transition-opacity duration-500 ease-in-out hover:opacity-90'>
                <Media />
            </div>
        </div>
    );
};

export default LeftBanner;
