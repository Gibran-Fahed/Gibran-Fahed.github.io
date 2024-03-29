import React from 'react'

import  {Tilt} from 'react-tilt'
import {services} from "../constants/index.js";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {textVariant,fadeIn} from "../utils/motion.js";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index,icon,title})=>{
  return (
    <>
      <Tilt options={{max: 45,scale:1,speed:450}}>
        <motion.div variants={fadeIn("right","",0.5 * index,0.75)} className="green-pink-gradient w-[200px] p-[1px] rounded-[20px]">
          <div  className="min-h-[250px] bg-tertiary flex flex-col justify-evenly items-center rounded-[20px]">
            <img className="object-contain w-16 h-16" src={icon} alt={title}/>
            <p className="text-white text-[20px]  text-center">{title}</p>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className="text-secondary mt-4 text-[17px] leading-[30px]">
          <ul className="flex flex-col gap-3 list-disc ml-10">
              <li>
                  <span className="font-bold">Backend Development: </span> Expertise in .NET and Laravel, dedicated to building robust and scalable backend solutions.
              </li>
              <li>
                  <span className="font-bold">DevOps: </span> Skilled in GitLab CI/CD, Jenkins, Docker, and Kubernetes, ensuring streamlined development processes and efficient deployment.
              </li>
              <li>
                  <span className="font-bold">Frontend Technologies: </span> Practical experience in Vue.js and React.
              </li>
              <li>
                  <span className="font-bold">Problem-Solving: </span> Recognized for advanced problem-solving skills, validated by a specialist ranking on Codeforces.
              </li>
          </ul>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-16 justify-center md:justify-startoy">
        {
          services.map((service,index)=>{
            return <ServiceCard key={service.title} index={index} {...service}/>
          })
        }
      </div>

    </>
  )
}

export default SectionWrapper(About,"About")