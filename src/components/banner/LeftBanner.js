import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Media from './Media'


const LeftBanner = () =>  {
    const [text] = useTypewriter({
        words: ['Web Developer.', 'Machine Learning Engineer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    })
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>
                    Hi, I'm{" "}
                    <span className='text-designColor capitalize'>Nikhil kumar singh</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 -tracking-wide'>I am a skilled and dedicated Machine Learning Engineer.
                    With a passion for leveraging artificial intelligence to solve complex problems, I bring a wealth of expertise and
                    experience to the field.
                </p>
            </div>
            <Media />
        </div>
    )
}

export default LeftBanner