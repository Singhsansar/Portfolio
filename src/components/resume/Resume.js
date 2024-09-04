import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);

    return (
        <section id="resume" className="w-auto mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="Resume" des="My Resume" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1">
                    <li
                        onClick={() => setEducationData(true)}
                        className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
                    >
                        Education
                    </li>
                </ul>
            </div>
            {educationData && <Education />}
        </section>
    );
};

export default Resume;
