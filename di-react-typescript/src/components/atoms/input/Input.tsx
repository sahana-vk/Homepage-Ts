import React from "react";
import "./style.css";

interface Props {
    className?: string;
    placeHolder: string;
    value?: any;
}

const Input = ({ className, placeHolder, value }: Props) => (
    <input 
        className={className}
        placeholder={placeHolder}
        autoComplete="off"
        maxLength={100}
        type="text"
        value={value}
    />
);

export default Input;