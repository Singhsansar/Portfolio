import React from 'react';
import { FiLayers } from 'react-icons/fi';
import { FaAws } from "react-icons/fa";
import { SiPytorch, SiDeepin } from 'react-icons/si';
import { HiMiniLanguage } from "react-icons/hi2";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { FaLaptopCode, FaServer } from 'react-icons/fa';

export const featuresData = [
  {
    id: 1,
    title: "Machine Learning",
    des: 'I develop and optimize machine learning algorithms for data-driven predictions, collaborating to seamlessly integrate them into practical applications.',
    icon: <FiLayers />
  },
  {
    id: 2,
    title: "Deep Learning",
    des: 'I specialize in the development and optimization of deep learning models, enabling data-driven predictions and practical applications.',
    icon: <SiDeepin />
  },
  {
    id: 3,
    title: "Computer Vision",
    des: 'I implement computer vision algorithms to analyze and interpret visual data, contributing to a wide range of applications.',
    icon: <TbDeviceComputerCamera />
  },
  {
    id: 4,
    title: "Natural Language Processing",
    des: 'I work on Natural Language Processing (NLP) tasks, leveraging algorithms to understand and generate human language for diverse applications.',
    icon: <HiMiniLanguage />
  },
  {
    id: 5,
    title: "MLOps",
    des: 'I specialize in MLOps, ensuring seamless integration of machine learning models into production environments, optimizing workflows for efficiency.',
    icon: <SiPytorch />
  },
  {
    id: 6,
    title: "Cloud Computing",
    des: 'I leverage cloud computing services to deploy and scale machine learning applications, optimizing performance and resource utilization.',
    icon: <FaAws />
  },
  {
    id: 7,
    title: "Web Development",
    des: 'I create responsive and dynamic web applications using modern web development technologies to deliver engaging user experiences.',
    icon: <FaLaptopCode />
  },
  {
    id: 8,
    title: "Web Hosting",
    des: 'I provide reliable and secure web hosting solutions, ensuring optimal performance and availability for websites and applications.',
    icon: <FaServer />
  }
];
