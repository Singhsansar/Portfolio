import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaDatabase, FaAws, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiGraphql, SiMongodb, SiPostgresql, SiRedux, SiJest, SiNextdotjs, SiKubernetes, SiLinux, SiJenkins, SiAnsible } from "react-icons/si";
import { SiTensorflow, SiPytorch, SiKeras, SiOpenai, SiNumpy, SiPandas, SiOpencv } from 'react-icons/si';
import Title from '../layouts/Title';

const ProfessionalSkills = () => {
    return (
        <section id='skills' className='relative w-auto py-20 border-b-[1px] border-b-black mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 overflow-hidden'>
            <Title des="What I Know" title="Professional Skills" />

            {/* Grid for Core Skills */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-12 justify-items-center">
                {/* Skills Icons */}
                <div className="flex flex-col items-center">
                    <FaHtml5 className="text-4xl sm:text-5xl text-orange-500 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">HTML5</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaCss3Alt className="text-4xl sm:text-5xl text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">CSS3</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaJsSquare className="text-4xl sm:text-5xl text-yellow-500 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaReact className="text-4xl sm:text-5xl text-blue-400 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">React</p>
                </div>
                <div className="flex flex-col items-center">
                    <SiTypescript className="text-4xl sm:text-5xl text-blue-600 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaNodeJs className="text-4xl sm:text-5xl text-green-500 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">Node.js</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaPython className="text-4xl sm:text-5xl text-blue-400 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">Python</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaGitAlt className="text-4xl sm:text-5xl text-orange-600 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">Git</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaDocker className="text-4xl sm:text-5xl text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">Docker</p>
                </div>
                <div className="flex flex-col items-center">
                    <SiTailwindcss className="text-4xl sm:text-5xl text-blue-400 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center">
                    <SiGraphql className="text-4xl sm:text-5xl text-pink-400 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">GraphQL</p>
                </div>
                <div className="flex flex-col items-center">
                    <SiMongodb className="text-4xl sm:text-5xl text-green-600 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">MongoDB</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaDatabase className="text-4xl sm:text-5xl text-indigo-500 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">SQL</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaAws className="text-4xl sm:text-5xl text-orange-500 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">AWS</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaFigma className="text-4xl sm:text-5xl text-purple-400 transform hover:scale-110 transition duration-300 ease-in-out" />
                    <p className="mt-2 text-sm sm:text-base">Figma</p>
                </div>
            </div>

            {/* Grid for AI/ML/DL and Other Tools */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-12 justify-items-center">
                {/* AI/ML/DL and Other Tools */}
                {[
                    { icon: SiTensorflow, color: 'text-orange-500', label: 'TensorFlow' },
                    { icon: SiPytorch, color: 'text-red-500', label: 'PyTorch' },
                    { icon: SiKeras, color: 'text-red-700', label: 'Keras' },
                    { icon: SiNumpy, color: 'text-blue-600', label: 'NumPy' },
                    { icon: SiPandas, color: 'text-teal-600', label: 'Pandas' },
                    { icon: SiOpencv, color: 'text-green-500', label: 'OpenCV' },
                    { icon: SiOpenai, color: 'text-gray-800', label: 'OpenAI' },
                    { icon: SiPostgresql, color: 'text-blue-400', label: 'PostgreSQL' },
                    { icon: SiRedux, color: 'text-purple-600', label: 'Redux' },
                    { icon: SiJest, color: 'text-red-500', label: 'Jest' },
                    { icon: SiNextdotjs, color: 'text-black', label: 'Next.js' },
                    { icon: SiKubernetes, color: 'text-blue-600', label: 'Kubernetes' },
                    { icon: SiLinux, color: 'text-orange-500', label: 'Linux' },
                    { icon: SiJenkins, color: 'text-blue-700', label: 'Jenkins' },
                    { icon: SiAnsible, color: 'text-red-600', label: 'Ansible' }
                ].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <skill.icon className={`text-4xl sm:text-5xl ${skill.color} transform hover:scale-110 transition duration-300 ease-in-out`} />
                        <p className="mt-2 text-sm sm:text-base">{skill.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProfessionalSkills;
