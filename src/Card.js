import React from 'react';
import './Card.css'

const Card = ({url, desc, key}) => {
    
    return(
        <div className="card">
            <img src={url} className="card-img-top" alt="ma belle photo" />
            <div className="card-body">
                <p className="card-text">{desc}</p>
            </div>
        </div>
    );
}

export default Card;