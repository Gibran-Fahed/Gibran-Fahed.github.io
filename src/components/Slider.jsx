import React, {useState, useEffect, useRef} from "react";

const Carousel = ({slides, imageClassNames = "", showIndicators = false, showSliderControls = false}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const setSlideIndex = (index) => {
        setCurrentIndex(index)
    }

    const nextSlide = () => {
        if (slides.length < 2)
            return;

        currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex((prevState) => prevState + 1);
    }

    const prevSlide = () => {
        if (slides.length < 2)
            return;

        currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex((prevState) => prevState - 1)
    }

    return (
        <div className="flex flex-col justify-between w-full overflow-x-hidden">
            <div className="relative flex flex-col">
                <div
                    className={`max-h-full flex flex-row w-full snap-x snap-mandatory ease-in-out transition-transform duration-500 ${imageClassNames}`}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {slides.map((url, index) => {
                        return (
                            <div key={index + "_" + url} data-key={index}
                                 className='w-full snap-center shrink-0'
                            >
                                <img src={url} alt="image-url" className="object-contain h-full w-full"/>
                            </div>
                        )
                    })}
                </div>
                {
                    showSliderControls && (
                        <div
                            className="absolute left-0 flex flex-row z-[1] h-full w-full text-[24px] items-center justify-between">
                            <button
                                className="bg-gray-200 text-black rounded-full w-10 h-10"
                                onClick={prevSlide}
                            >
                                &lt;
                            </button>
                            <button
                                className="bg-gray-200 text-black  rounded-full w-10 h-10"
                                onClick={nextSlide}
                            >
                                &gt;
                            </button>
                        </div>
                    )
                }
            </div>

            {
                showIndicators && (
                    <div className="w-full flex gap-2 flex-wrap justify-center mt-3">
                        {slides.map((url, index) => {
                            return (
                                <button key={index + "_btn_" + url}
                                        className={`w-4 h-4 rounded-full border-2 border-gray-500
                                     ${currentIndex === index ? 'bg-gray-50' : 'bg-gray-400'}`}
                                        onClick={() => setSlideIndex(index)}
                                >
                                </button>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default Carousel