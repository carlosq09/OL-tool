import React, { useState, useRef, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
//API
import Api from '../../api'
//styles
import './index.scss'

function OmpaDetails({ history }) {
    const { id } = useParams()
    const descriptionRef = useRef()
    const [item, setItem] = useState([])

    const setDescriptionHtmlFromResponse = ({ description }) => {
        descriptionRef.current.innerHTML = description;
    }

    useEffect(() => {
        try {
            Api.getOompaLoompaDetails(id).then((response) => {
                setItem(response)
                setDescriptionHtmlFromResponse(response)
            })
        } catch (error) {
            history.push('/oompa-loompas')
        }

    }, [history.location])


    return <div className="OompaDetails" key={`${item.first_name}`}>
        <img src={item.image} />
        <div className="OompaDetails__content">
            <div className="OompaDetails__name">{item.first_name} - {item.last_name}</div>
            <div className="OompaDetails__gender">{item.gender === 'F' ? 'Woman' : 'Man'}</div>
            <div className="OompaDetails__profession">{item.profession}</div>
            <div className="OompaDetails__description" ref={descriptionRef} />

        </div>
    </div>

}

export default withRouter(OmpaDetails);
