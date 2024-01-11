import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne, projectTwo, projectThree } from '../../assets/index'

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Projects"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCard
                    title='Project 1'
                    des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    src={projectTwo}
                />
                <ProjectCard
                    title='Project 1'
                    des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    src={projectOne} />
                <ProjectCard title='Project 1'
                    des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    src={projectThree} />
                <ProjectCard title='Project 1'
                    des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    src={projectTwo} />
                <ProjectCard title='Project 1'
                    des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    src={projectThree} />
                <ProjectCard title='Project 1'
                    des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    src={projectOne} />
            </div>
        </section>
    )
}

export default Projects