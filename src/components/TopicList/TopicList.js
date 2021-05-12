import React, { useContext, useEffect, useState } from 'react';
import { topicContext } from '../../context/TopicContext';
import CustomPagination from '../CustomPagination/CustomPagination';
import TopicCard from '../TopicCard/TopicCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopicList.css'
import Range from '../Range/Range'
import { useHistory } from 'react-router';
import axios from 'axios';
// Bootstrap 


const TopicList = () => {
    const { getTopics, topicsData } = useContext(topicContext)
    const history = useHistory()
    const search = new URLSearchParams(history.location.search)
    useEffect(() => {
        
        getAll()
    }, [])
    useEffect(() => {
        getTopics()
    },[history.location])
    function getProductsByFilters(filterKey, filterValue) {

        search.set(filterKey, filterValue)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
    }
    let [all, setAll] = useState([])
    async function getAll() {
        let { data } = await axios("http://localhost:8000/topics")
        setAll(data)
    }
    console.log(all)
    console.log(topicsData)

    return (
        <>
            <div className="list">
                <h2 className="text-center" style={{color:"white"}}>Фильтрация по цене</h2>
                {all.length ? (
                    <Range tours={all} history={history} getProductsByFilters={getProductsByFilters} />
                ) : (null)}
                <div className="list-div">
                    {topicsData.map((item) => (
                        <TopicCard key={item.id} item={item} />

                    ))}
                </div>
                <CustomPagination count={topicsData.length} />
            </div>
        </>
    );
};

export default TopicList;