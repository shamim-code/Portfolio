import React from 'react'
import ProjectCard from './ProjectCard'


export default function Project() {
  return (
    <div className=" mt-5">
      
      <h1 className="text-[#FFAE02] my-5 uppercase text-center underline font-bold">Projects I've Worked on.</h1>

      <div className=' gird grid-cols-1 justify-center w-full'>
        <ProjectCard data-aos="flip-up" />
      </div>
              
    </div>
  )
}
