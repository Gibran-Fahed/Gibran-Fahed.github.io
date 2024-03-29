import React, {useState} from 'react'
import {Tilt} from "react-tilt"
import {motion} from "framer-motion";
import {externalLink, gallery} from "../assets"
import {textVariant, fadeIn} from "../utils/motion.js";
import {styles} from "../styles.js";
import {SectionWrapper} from "../hoc"
import {projects} from "../constants/index.js";
import Carousel from "../components/Slider.jsx"
import Modal from "./Modal.jsx";

const ProjectCard = ({index, name, description, tags, image, images, source_code_link, openSliderModalFunc}) => {

    return (
        <>
            <div className="w-full sm:w-[400px]">
                <Tilt
                    options={{
                        max: 7,
                        speed: 200,
                        scale: 1
                    }}
                    className="bg-tertiary p-5 rounded-2xl h-full "
                >
                    <div className="w-full relative h-[270px]">
                        {/*<img src={image} alt={name} className="w-full h-full object-contain rounded-2xl"/>*/}
                        <Carousel slides={images} showIndicators={true} imageClassNames={"h-[250px]"}/>
                        <div className="absolute flex flex-col gap-1 items-end justify-start m-2 inset-0">
                            <div
                                className="flex justify-center items-center cursor-pointer black-gradient rounded-full h-16 w-16"
                                onClick={() => window.open(source_code_link, "_blink")}
                            >
                                <img src={externalLink} alt="link" className="object-contain h-1/2 w-1/2"/>
                            </div>
                            <div
                                className="flex justify-center items-center cursor-pointer black-gradient rounded-full h-16 w-16"
                                onClick={() => openSliderModalFunc(images)}
                            >
                                <img src={gallery} alt="link"
                                     className="object-contain h-1/2 w-1/2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-[26px] font-bold">{name}</h2>
                        <p className="text-secondary text-[16px] leading-[25px] mt-2">{description}</p>
                        <div className="flex flex-wrap gap-3 text-[14px] mt-3">
                            {
                                tags.map((tag, index) => (
                                    <span key={`project-tag-${index}`} className={tag.color}>
                                   #{tag.name}
                                 </span>
                                ))
                            }
                        </div>
                    </div>
                </Tilt>
            </div>
        </>
    );
}
const Works = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [slides, setSlides] = useState([])

    const openSliderModal = (slides) => {
        setSlides(slides)
        setIsModalOpen(true)
    }

    return (
        <>
            {
                isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <Carousel slides={slides} imageClassNames={"h-[400px]"} showIndicators={true} showSliderControls={true}/>
                    </Modal>
                )
            }
            <div>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-7 justify-around">
                {projects.map((project, index) => {
                    return <ProjectCard index={index} key={`project-${index}`} {...project}
                                        openSliderModalFunc={openSliderModal}/>
                })}
            </div>

        </>
    )
}

export default SectionWrapper(Works, "Projects")