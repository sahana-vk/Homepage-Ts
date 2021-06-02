import React from 'react';
import "./style.css";

interface Props {
    content: string | React.ReactNode;
    type?: string;
}

const Text = ({ content, type }: Props) => (
    <p className={`text text-${type}`}>
        { content }
    </p>
)

Text.defaultProps = {
    type: "btn"
};

export default Text;