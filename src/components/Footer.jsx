import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" mt-5 py-2">

      <h1 className='text-[#FFAE02] my-5 uppercase text-center underline font-bold'>Contact</h1>

      <div data-aos="flip-left" className=' flex justify-center'>
      <div className='flex flex-col justify-center gap-2 w-[250px] mx-1 sm:w-[300px] md:w-[500px] lg:w-[600px]'>

        <input className="pl-2 rounded-md outline-none" type="text" placeholder='Email' />
        <input className="pl-2 rounded-md outline-none" type="text" placeholder="Whatsapp number" />
        <input className="pl-2 rounded-md outline-none" type="text" placeholder="Subject" />

        <textarea className='h-20 rounded-md p-2 outline-none' placeholder='Message'></textarea>

        <button className=' bg-[#FFAE02] rounded-md hover:outline hover:outline-yellow-500 hover:bg-transparent text-white duration-200' type="submit">SEND</button>


        </div>
      </div>

        <div className='Footer flex justify-between px-5 mt-5 b'>

          <div className="text-white uppercase">Shamim @ 2024</div>

          <div className='flex gap-2'>
            <a href='https://twitter.com/Shamim3696'><FaSquareXTwitter data-aos="zoom-out-up" style={{display:"inline" , color:"white",backgroundColor:"black" ,fontSize:"22px"}} /></a>
            <a href='https://www.facebook.com/MMM.SSS.Shamim'><FaFacebook data-aos="zoom-out-left" style={{display:"inline" , color:"blue",borderRadius:"10px",backgroundColor:"white" ,fontSize:"22px"}} /></a>
            <a href='https://www.linkedin.com/in/shamim-al-mamun-8a2959204/'><CiLinkedin data-aos="zoom-out-left" style={{display:"inline" ,borderRadius:"2px", color:"blue", backgroundColor:'white' ,fontSize:"20px"}} /></a>
            <a href='https://github.com/shamim-code'><FaGithubSquare data-aos="zoom-out-left" style={{display:"inline" , color:"white",backgroundColor:'black' ,fontSize:"24px"}} /></a>

          </div>


        </div>
      
    </div>
  )
}
