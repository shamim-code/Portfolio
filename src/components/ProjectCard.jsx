import React from 'react'

export default function ProjectCard() {
  return (
    <div data-aos="flip-up" className='flex justify-between px-1 gap-1 w-[200px] md:ml-[30%] md:w-[400px]'>

    <img className=" rounded-md mr-1" src='images/Screenshot (565).png'></img>

      <div>

        <h1 className=" text-white">NewsPortal</h1>
        <h1 className=" text-white">Features-</h1>
        <ol className=" text-gray-400">
            <li>-Read News</li>
            <li>-Add News </li>
            <li>-Details</li>
        </ol>

        <div className="flex gap-1 flex-col">
            <a href='https://beautiful-gnome-2fecda.netlify.app/'  className=" bg-slate-300 px-5 rounded-full uppercase">Live</a>
            <a href='https://github.com/shamim-code/NewsPortal' className=" bg-slate-300 px-5 rounded-full uppercase">SourceCode</a>
        </div>

      </div>
    </div>
  )
}
