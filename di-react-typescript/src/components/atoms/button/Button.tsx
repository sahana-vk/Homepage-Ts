import React from 'react';
import Text from "../../atoms/text/Text";
import "./style.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    name: string;
    variant?: string;
    type: "button" | "submit" | "reset" | undefined;
}

const Button = ({ name, type, variant }: Props) => (
    <button className={`btn btn-${variant}`} type={type}>
        <Text content={name}/>
    </button>
)

Button.defaultProps = {
    variant: "primary"
};

export default Button;