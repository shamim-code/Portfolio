import React from 'react'
import {animate, motion} from "framer-motion";


export default function Menu() {
    const navlinks = ["Home","About", "Education", "Projects","Contact"];
  return (
    <div className=' fixed left-0 top-16 z-50 md:hidden'>
      <motion.div 
        initial={{x:-100}} 
        animate={{x:0}}
        transition={{
          duration:0.3,
        }}>
          <div className=' inline-block bg-slate-800 text-white p-2 rounded-sm '>
            <motion.h6 initial={{opacity:0.5}}
            animate={{opacity:1}}
            transition={{duration:0.8}}>
              <motion.ul>
                {
                  navlinks.map((link,i) => {
                    return <motion.li key={i}
                    
                    whileHover={{
                      x:5,
                      backgroundColor:"#FFAE02",
                      padding:"3px",
                      cursor: "pointer",
                      borderRadius: "20px"
                    }}
                    ><a href={"#"+link}>{link}</a></motion.li>
                  })
                }
              </motion.ul>
            </motion.h6>
          </div>
          
        </motion.div>
        
    </div>
  )
}
