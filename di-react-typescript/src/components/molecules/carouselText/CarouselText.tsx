import React from 'react';
import Text from "../../atoms/text/Text";
import Image from "../../atoms/image/Image";
import Link from "../../atoms/link/Link";
import "./style.css";

interface Props {
    content: {
        title: string;
        subTitle: string;
        tag1: string;
        tag2: string;
    }
}

const CarouselText = ({ content: { title, subTitle, tag1, tag2 } }: Props) => (
    <div className="carousel-text">
        <div>
            <Text content={title} type="carousel-heading"/>
        </div>
        <div className="padding-top-14">
            <Text content={subTitle} type="carousel-subheading"/>
        </div>
        <div className="margin-tb-18">
            <Text content={tag1} type="carousel-tags"/>
            <Text content={tag2} type="carousel-tags"/>
        </div>
        <div className="play-button">
            <Image location="play-button-5.png" width={92} height={67} alt={title}/>
            <Link text="Play" url="/" active="carousel-play"  />
        </div>
    </div>
);

export default CarouselText;