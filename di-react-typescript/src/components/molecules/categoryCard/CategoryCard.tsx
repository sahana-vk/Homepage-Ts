import React from 'react';
import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";
import "./style.css";


interface Props {
    category: {
        image: string;
        text: string;
    }
};
const CategoryCard = ({ category: { image, text } }: Props) => (
    <div className="category-card">
        <Image className="border-rad-10" location={image} width={202} height={125}/>
        <div className="category-text-position">
            <Text content={text} type="category-text" />
        </div>
    </div>
);

export default CategoryCard;