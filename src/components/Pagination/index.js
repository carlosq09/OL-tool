import React from 'react'
import { withRouter } from 'react-router-dom'
//styles
import './index.scss'

const Pagination = ({ history, number, url }) =>
    <div className="pagination">
        {
            Array(number).fill().map((_, index) =>
                <div className="pagination__item" onClick={() => history.push(`${url}${index + 1}`)}>
                    {index + 1}
                </div>)
        }
    </div>


export default withRouter(Pagination);
