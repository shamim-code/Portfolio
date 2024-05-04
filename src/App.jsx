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

          <p className="section02 bg-gray-800 font-serif p-4 text-white text-justify">Welcome to my digital domain, where innovation meets expertise! I am a dynamic full stack software developer, armed with a robust toolkit of cutting-edge technologies and a passion for crafting exceptional digital experiences.

          At the forefront of my skill set lies a mastery of frontend development, where I leverage the power of HTML, CSS, and Tailwind CSS to sculpt captivating user interfaces. With a keen eye for aesthetics and a dedication to pixel-perfection, I bring designs to life with fluidity and finesse. Harnessing the expressive capabilities of Framer Motion and the versatility of React, I breathe life into static pages, infusing them with interactive elements and seamless animations that captivate and engage users.

          But my expertise doesn't end at the frontend. On the backend, I wield the formidable Node.js and Express frameworks, architecting robust and scalable server-side solutions that power the backbone of web applications. Whether it's crafting RESTful APIs or implementing complex business logic, I thrive in the realm of server-side development, ensuring that applications run smoothly and securely.

          Moreover, I am well-versed in the Next.js framework, which allows me to build high-performance, production-ready web applications with ease. From server-side rendering to static site generation, Next.js empowers me to deliver lightning-fast experiences that exceed expectations.

          What truly sets me apart, however, is not just my technical prowess, but my unwavering commitment to problem-solving and effective communication. I approach every challenge with a strategic mindset, dissecting problems and devising elegant solutions that drive projects forward. Moreover, my ability to communicate complex technical concepts in clear and concise terms fosters collaboration and ensures that stakeholders are aligned every step of the way.
          </p>
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
