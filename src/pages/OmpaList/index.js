import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
//API
import Api from '../../api'
//hook
import useQuery from '../../hooks/useQuery'
//components
import Pagination from '../../components/Pagination'
import SearchBar from '../../components/SearchBar'
import OompaCard from '../../components/OompaCard'
//styles
import './index.scss'

function OmpaList({ history }) {
    const query = useQuery()
    const [items, setItems] = useState([])
    const [currentItems, setCurrentItems] = useState([])
    const [totalPages, setTotalPages] = useState()

    const handleDetails = (id) => {
        history.push(`/oompa-loompas/${id}`)
    }

    const handleFilter = (query) => {
        const filtered = Api.filterDataByNameOrProfession(query, items)

        setCurrentItems(filtered)
    }

    useEffect(() => {
        const currentPage = query.get('page')

        Api.getOompaLoompaList(currentPage).then(({ results, total: totalPages }) => {
            setTotalPages(totalPages)
            setItems(results)
            setCurrentItems(results)
        })

    }, [history.location])

    return <div>
        <div className="OompaList__searchBar">
            <SearchBar onSearch={handleFilter} />
        </div>
        <div className="OompaList__heading">
            <h1>Find your Oompa Loompa</h1>
            <h2>There are more than 100K</h2>
        </div>
        <div className="OompaList__list">
            {
                currentItems?.length > 0 ? currentItems.map((item, index) => <OompaCard
                    onDetails={handleDetails}
                    key={`${index}${item.fist_name}`}
                    {...item}
                />) : <div>Loading...</div>
            }
        </div>
        <Pagination number={totalPages} url="/oompa-loompas?page=" />
    </div >
}

export default withRouter(OmpaList);
