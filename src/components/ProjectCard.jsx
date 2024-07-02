import React from 'react';

export default function ProjectCard(props) {
  const { project } = props;

  return (
    <div data-aos="flip-up" className='mt-10 flex justify-between px-1 w-[200px] md:ml-[30%] md:w-[400px]'>
      <img className="rounded-md mr-1" src={project.img} alt={project.title} />
      <div>
        <h1 className="text-white">{project.title}</h1>
        <h1 className="text-white">Feature-</h1>
        <p className='text-white' dangerouslySetInnerHTML={{ __html: project.features.replace(/\n/g, '<br/>') }}></p>
        <div className="flex gap-1 flex-col">
          <a href={project.livelink} className="bg-slate-300 px-5 rounded-full uppercase">Live</a>
          <a href={project.githublink} className="bg-slate-300 px-5 rounded-full uppercase">SourceCode</a>
        </div>
      </div>
    </div>
  );
}
