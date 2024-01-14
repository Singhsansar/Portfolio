import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            {/* part one */}
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="B.Tech in Computer Science and Engineering"
                        subTitle="Amrita School of Engineering, Amritapuri, Kerala (2021 - present)"
                        result="CGPA: 8.2/10"
                        des="Tech enthusiast with a B.Tech in Computer Science, majoring in Artificial Intelligence. Achieved an impressive 8.2/10 CGPA, showcasing expertise in machine learning and data-driven tech. Ready to innovate and contribute to the dynamic AI landscape."
                    />
                    <ResumeCard
                        title="Higher Secondary Certificate (12th Grade)"
                        subTitle="Pentagon International College, Kathmandu, Nepal (2017 - 2019)"
                        result="3.36/4"
                        des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                    />
                    <ResumeCard
                        title="Secondary School Certificate (10th Grade)"
                        subTitle="Shree Maisthan Vidyapeeth MA VI, Birgunj, Nepal (2015 - 2017)"
                        result="GPA: 3.40/4"
                        des="Successfully completed the 10th grade, showcasing a strong academic performance with a GPA of 3.40/4. Acquired fundamental knowledge across various subjects, laying the groundwork for further academic pursuits."
                    />

                </div>
            </div>
        </motion.div>
    );
}

export default Education