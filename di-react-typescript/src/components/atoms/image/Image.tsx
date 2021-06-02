import React from 'react';
import "./style.css";

interface Props {
    location: string;
    alt?: string;
    width?: number;
    height?: number;
    className?:string;
}

const Image = ({ location, alt, width=24, height, className }: Props) => (
    <img
        alt={alt}
        height={height}
        width={width}
        className={className}
        src={location}
    />
);

export default Image;