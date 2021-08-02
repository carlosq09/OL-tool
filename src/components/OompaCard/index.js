import React from 'react'
//styles
import './index.scss'

const OompaCard = ({ first_name, last_name, gender, profession, image, id, onDetails }) => {

    return <div className="OompaCard" onClick={() => onDetails(id)}>
        <div className="OompaCard__image-container">
            <img className="OompaCard__image" src={image} />
        </div>
        <div className="OompaCard__name">{first_name} - {last_name}</div>
        <div className="OompaCard__gender">{gender === 'F' ? 'Woman' : 'Man'}</div>
        <div className="OompaCard__profession">{profession}</div>
    </div>
}

export default OompaCard