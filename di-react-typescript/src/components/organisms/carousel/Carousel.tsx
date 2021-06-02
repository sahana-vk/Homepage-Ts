import React, { useState, useEffect } from "react";
import Link from "../../atoms/link/Link";
import Image from "../../atoms/image/Image";
import CarouselText from "../../molecules/carouselText/CarouselText";
import "./style.css";

const content = [
    {
        title: "Stream What You Love",
        subTitle: "All in one place Food, Discovery Planet.",
        tag1: "New",
        tag2: "Don't Miss",
        image: "Image.jpg"
    },
    {
        
        title: "Cricket",
        subTitle: "Watch latest Cricket shows.",
        tag1: "Recommended",
        tag2: "Trending",
        image:"cricket.jpg"
    },
    {
        title: "Pandemic Covid",
        subTitle: "Life Changes in Pandemic.",
        tag1: "Editor's Pick",
        tag2: "Must Watch",
        image: "pandemic_image.jpg"
    },
    {
        title: "90 Day Fiance: The Other Way",
        subTitle: "Americans uproot their lives and move to a foreign country for love.",
        tag1: "All Time Fave",
        tag2: "Try Now",
        image: "ninetydaysfiance.jpeg"
    }
];

const Carousel = () => {
    const [activeContent, setActiveContent] = useState(0);

    useEffect(() => {
        const next = (activeContent + 1) % content.length;
        const id = setTimeout(() => setActiveContent(next), 3000);
        return () => clearTimeout(id);
    }, [activeContent]);

    const onClickItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const { index } = (event.target as HTMLAnchorElement).dataset;
        setActiveContent(Number(index || 0));
    }
    

    const onPrevious = (event: React.MouseEvent) => {
        event.preventDefault();
        setActiveContent(!!activeContent ? activeContent -1 : content.length - 1);
    };

    const onNext = (event: React.MouseEvent) => {
        event.preventDefault();
        if (activeContent === content.length - 1) {
            setActiveContent(0);
        } else {
            setActiveContent(activeContent + 1);
        }
    };

    return (
        <div className="carousel-container">
            <div className="carousel-arrow carousel-arrow-left">
                <Link 
                    text={<Image location="/previous.png" alt="Previous" />} 
                    url="/" 
                    onClick={onPrevious} 
                    active="nav" 
                    className="nav-icon"/>
            </div>
            <div className="carousel-wrapper">
                <div className="carousel-card-wrapper">
                    <CarouselText content={content[activeContent]}/>
                    <Image 
                        className="carousel-card-image" 
                        location={content[activeContent].image}
                        alt={content[activeContent].title}
                        width={875} 
                        height={490} 
                    />
                </div>
            </div>
            <div className="carousel-indicator">
                {
                    content.map((_, index) => (
                        <Link 
                            key={index} 
                            url="/"
                            className={activeContent === index ? "carousel-indicator-active" : "carousel-indicator-inactive"}
                            data-index={index}
                            onClick={onClickItem}
                            text=""
                        />
                    ))
                }
            </div>
            <div className="carousel-arrow carousel-arrow-right">
                <Link 
                    text={<Image location="/next.png" alt="Next"/>} 
                    url="/" 
                    onClick={onNext} 
                    active="nav" 
                    className="nav-icon"
                />
            </div>
        </div>
    );
};

export default Carousel;