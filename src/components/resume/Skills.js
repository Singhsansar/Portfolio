import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const Skills = () => {
    const designSkills = ['Machine Learing', 'Deep Learning', 'Computer Vision', 'Large Language Models', ''];
    const developmentSkills = ['React', 'HTML 5', 'CSS3', 'JavaScript', 'Software', ''];

    return (
        <div className='py-10'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="w-full max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
            >
                <SkillCard category="Machine Learning" title="Machine Learning Skills" skills={designSkills} />
                <SkillCard category="Development" title="Development Skills" skills={developmentSkills} />
            </motion.div>
        </div>
    );
};

export default Skills;
