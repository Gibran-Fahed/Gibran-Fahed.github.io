import React, {useEffect, useRef, useState} from 'react'
import CanvasLoader from "./CanvasLoader.jsx";


const LazyLoadComponent = ({children}) => {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (sectionRef.current == null)
            return;

        const intersectionObserver = new IntersectionObserver(function ([entry]) {

            console.log(entry.intersectionRatio);
            if (entry.isIntersecting && entry.target.id === "loader" && entry.intersectionRatio > 0.2) {
                setIsVisible(true)
            }
            else if (entry.target.id != "loader" && entry.intersectionRatio <= 0) {
                setIsVisible(false)
            }
        }, {
            threshold: [0,0.2]
        })

        const items = Array.from(sectionRef.current.querySelectorAll("div"))

        items.forEach(item => intersectionObserver.observe(item))


        return () => items.forEach(item => intersectionObserver.unobserve(item))

    }, []);

    return (
        <div ref={sectionRef}>
            {
                !isVisible
                    ? <div id="loader" className="h-[400px]"></div>
                    : (<div>{children}</div>)

            }
        </div>
    );
}

export default LazyLoadComponent