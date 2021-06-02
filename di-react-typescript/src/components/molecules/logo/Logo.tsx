import React from "react";
import Image from "../../atoms/image/Image";
import Link from "../../atoms/link/Link";
import "./style.css";

interface Props {
    content: {
        list: string;
        listAlt: string;
        logo: string;
        logoAlt: string;
    }
}

const Logo = ({ content }: Props) => (
    
    <div className="logo">
        <Image 
            location={content.list}
            alt={content.listAlt || 'list'}
            className="hamburger"
        />
        <Link 
            text={<Image location={content.logo} alt={content.logoAlt} className="app-logo"/>} 
            url="/" 
            active="text-link-active"
        />
    </div>
);

export default Logo;