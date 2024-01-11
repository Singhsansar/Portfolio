import React from 'react'
import Title from '../layouts/Title'

const Resume = () => {
    return (
        <section id='resume'
            className='w-full py-20 border-b-[1px] border-b-black'>
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Explore my professional journey and skills"
                    des="My Resume"
                />
            </div>


            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <li className=''>Eduction</li>
                    <li>Professional skills</li>
                    <li>Experience</li>
                    <li>Achievements</li>

                </ul>
            </div>






        </section>
    )
}

export default Resume