import React from 'react';
import Header from "../organisms/header/Header";
import Carousel from "../organisms/carousel/Carousel";
import Category from "../organisms/category/Category";

const Template = () => {
    return (
        <React.Fragment>
            <Header/>
            <Carousel/>
            <Category/>
        </React.Fragment>
    );
};

export default Template;