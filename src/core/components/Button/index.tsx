import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ( {text } : Props) => (
    <button className="btn">
        <h5 className="text">{text}</h5>
    </button>
)

export default Button;