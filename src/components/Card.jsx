import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import AOS from 'aos';

export default function Card(props) {

  return (
    <div data-aos="zoom-in" className=" inline-block bg-[#ffffff] p-4 rounded-lg w-[350px] hover:bg-opacity-75 cursor-pointer duration-200">

          <div className="Card ">

            <div className="Top flex justify-between gap-2">

              <div className="topLeft flex gap-2 bg-slate-950 p-2 rounded-lg">
              <MdOutlineDateRange style={{color:"#FFAE02", fontSize:"20px"}} />
              <p className="text-[#FFAE02]">{props.degree.duration}</p>
              </div>

              <p className="inline-block bg-[#fcefcc] p-2 rounded-xl">{props.degree.tag}</p>

            </div>

          </div>



            <p className=" my-2 bg-slate-300 inline-block px-2 rounded-lg">{props.degree.degree}</p>
            <p className="DegreeName my-2 font-semibold">{props.degree.department}</p>

          <div className="University flex gap-2">
            <BiSolidInstitution style={{color:"#FFAE02", fontSize:"20px"}} />
            <p className="">{props.degree.institue}</p>
          </div>

          <div className="Location flex gap-2">
            < IoLocation  style={{color:"#FFAE02", fontSize:"20px"}} />
            <p className="">{props.degree.address}</p>
          </div>


              
          </div>
  )
}
