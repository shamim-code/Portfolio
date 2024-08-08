import React, { useState } from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

import Card from './components/Card';
import Tools from './components/Tools';
import Project from './components/Project';
import Footer from './components/Footer';
import Menu from './components/Menu';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  const [toggle, setToggle] = useState(false);

  const education =[
    {
      degree: "Bachelor Degree",
      department: "Computer Science and Engineering",
      institue: "Daffodil International University",
      address: "DSC, Ashulia, Savar, Dhaka",
      tag: "Graduation",
      duration: "2020-2024"
    },
    {
      degree: "HSC",
      department: "Science Group",
      institue: "Sristy College of Tangail",
      address: "Biswas Betka, Tangail.",
      tag: "Intermediate",
      duration: "2016-2018"
    },
    {
      degree: "SSC",
      department: "Science Group",
      institue: "Sakhipur P.M. Pilot High School",
      address: "Sakhipur, Tangail.",
      tag: "School",
      duration: "2011-2016"
    }
  ]

  AOS.init();

  return (
    <div>
      <div className="bg-[#0c0c0c] pt-2">
        <nav className="flex justify-between gap-2 mx-2 bg-[#e7e7e7] py-2 px-4 rounded-full " id='Home'>
          <span className="font-semibold text-xl">SAM</span>

          <div className="flex justify-around gap-2">
            <ul className="hidden md:flex justify-between gap-3">
              <li className="text-slate-950 uppercase font-semibold hover:text-[#FFAE02] duration-150">
                <a href="#Home">Home</a>
              </li>
              <li className="text-slate-950 uppercase font-semibold hover:text-[#FFAE02] duration-150">
                <a href="#About">About</a>
              </li>
              <li className="text-slate-950 uppercase font-semibold hover:text-[#FFAE02] duration-150">
                <a href="#Education">Education</a>
              </li>
              <li className="text-slate-950 uppercase font-semibold hover:text-[#FFAE02] duration-150">
                <a href="#Projects">Projects</a>
              </li>
              <li className="text-slate-950 uppercase font-semibold hover:text-[#FFAE02] duration-150">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <button className=' md:hidden' onClick={(e)=> setToggle(!toggle)}>{toggle ? <RxCross2 style={{background:"#FFAE02",fontSize:"28px" , padding:"5px", borderRadius:"50%", fontWeight:"bold"}} /> : <GiHamburgerMenu style={{background:"#FFAE02",fontSize:"28px" , padding:"5px", borderRadius:"50%",fontWeight:"bold"}} />}</button>
          </div>
        </nav>

          {toggle ? <Menu /> : ""}

        {/* Hero Section */}
        <div data-aos="zoom-in" id="HeroSection" className="relative">
          <img src="/images/lastup.png" className="w-full" alt="Image" />
        </div>



        {/* About Section */}
      <hr className="mb-2" />

        <div className="mainContainer bg-slate-950 ">
          <h1 className=" text-[#FFAE02] text-center uppercase underline font-bold" id='About'>About Me</h1>
          <div className="section01 md:flex justify-around box-border p-4">

            <div className="subSection01">
                <h1 className="text-[#FFAE02] text-center mb-2 uppercase font-bold">I Love to-</h1>
                <div className=" grid grid-cols-2 gap-2">
                  <p className=" bg-slate-200 inline-block p-2 rounded-full font-serif text-center">Play Cricket</p>
                  <p className=" bg-slate-200 inline-block p-2 rounded-full font-serif text-center">Travelling</p>
                  <p className=" bg-slate-200 inline-block p-2 rounded-full font-serif text-center">Mountain</p>
                  <p className=" bg-slate-200 inline-block p-2 rounded-full font-serif text-center">Help people</p>
                </div>
            </div>

            <div className="subSection02 text-center mt-4 flex justify-around">

              <div className=" bg-gray-800 inline-block p-4 rounded-xl m-2 ">
                  <h1 className="text-[#FFAE02] font-bold">1+ </h1>
                  <h1 className=" text-white opacity-50">Years Experience</h1>
              </div>

              <div className=" bg-gray-800 inline-block p-4 rounded-xl m-2">
                  <h1 className="text-[#FFAE02] font-bold">7+</h1>
                  <h1 className=" text-white opacity-50">Projects</h1>
              </div>

            </div>

          </div>

          <section className="section02 bg-gray-800 font-serif p-4 text-white text-justify flex flex-col gap-4 items-center">
            <h1 className='text-center text-2xl bg-gradient-to-r from-yellow-400 to-rose-600 bg-clip-text text-transparent'>A Full-stack Software Developer</h1>

            <div data-aos="zoom-in" id="frontend" className='flex flex-col gap-1 ml-5 bg-slate-900 p-2 w-[300px] rounded-md'>
              <h2 className=' text-xl  bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent '>Frontend Technology -</h2>
              <ul className=' text-slate-400'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>GSAP Animation</li>
                <li>Redux</li>
              </ul>
            </div>

            <div data-aos="zoom-in" id="backend" className='flex flex-col gap-1 ml-5 bg-slate-900 p-2 w-[300px] rounded-md'>
              <h2 className=' text-xl  bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent'>Backend Technology -</h2>
              <ul className=' text-slate-400'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PostgreSql</li>
                <li>Payment Gateway Integration</li>
                <li>Socket.io</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Education */}
        <h1 className="text-[#FFAE02] my-5 uppercase text-center underline font-bold" id='Education'>Education</h1>

        <div className="Education bg-[#0c0c0c] mx-2 my-5 pb-3 grid gap-2 justify-center sm:content-center md:content-center md:grid-cols-2 lg:grid-cols-3">
          {
            education.map((degree, i)=> <Card key={i} degree={degree} />)
          }
        </div>

        <p id='Tools'></p>  
        <Tools />
        <p id='Projects'></p>
        <Project />
        <p id='Contact'></p>
        <Footer />
      </div>
    </div>
  );
}
