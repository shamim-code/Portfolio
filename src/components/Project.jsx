import React from 'react';
import ProjectCard from './ProjectCard';

export default function Project() {
  const projectInfo = [
    {
      title: "News Portal",
      livelink: "https://newsportal22.netlify.app/",
      githublink: "https://github.com/shamim-code/NewsPortal",
      features: "1. Add News\n2. Read News\n3. Update News\n",
      img: "https://i.ibb.co/m89B0K6/Screenshot-565.png"
    },
    {
      title: "Smart Meals",
      livelink: "https://smart-meal.vercel.app/",
      githublink: "https://github.com/shamim-code/smartMeal",
      features: "1. Meals Manage\n2. User Report\n3. Monthly Overview\n",
      img: "https://i.ibb.co/51C3MKg/smartmeals.png"
    }
  ];

  return (
    <div className="mt-5">
      <h1 className="text-[#FFAE02] my-5 uppercase text-center underline font-bold">
        Projects I've Worked on.
      </h1>

      <div className='grid grid-cols-1 justify-center w-full'>
        {projectInfo.map((project, i) => (
          <ProjectCard key={i} project={project} data-aos="flip-up" />
        ))}
      </div>
    </div>
  );
}
