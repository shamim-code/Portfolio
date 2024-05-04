import React from 'react'
import { SiPostman } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub,FaFigma } from "react-icons/fa";

export default function Tools() {
  return (
    <div className=' bg-slate-950 '>
        <h1 className="text-[#FFAE02] my-5 uppercase text-center underline font-bold">The tools which I used for development.</h1>

        <div className=' flex justify-center'>
            <div className='flex justify-around gap-1 md:w-[600px]'>

                <div className=" bg-slate-300 inline-block rounded-full px-2">
                        <FaFigma style={{display:"inline" , color:"blue" ,fontSize:"20px"}} />
                        <p className=' inline-block'>Figma</p>
                </div>


                <div className=" bg-slate-300 inline-block rounded-full px-2">
                    <TbBrandVscode style={{display:"inline" , color:"#3498db" ,fontSize:"20px"}} />
                    <p className=' inline-block'>VS Code</p>
                </div>

                <div className=" bg-slate-300 inline-block rounded-full px-2">
                    <FaGithub style={{display:"inline" , color:"black" ,fontSize:"20px"}} />
                    <p className=' inline-block'>Github</p>
                </div>

                <div className=" bg-slate-300 inline-block rounded-full px-2">
                    <SiPostman style={{display:"inline" , color:"#e67e22" ,fontSize:"20px"}} />
                    <p className=' inline-block'>Postman</p>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}
