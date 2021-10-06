import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ( {text } : Props) => (
    <button className="btn">
        <div className="text">{text}</div>
    </button>
)

export default Button;