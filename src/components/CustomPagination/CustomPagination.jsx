import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { topicContext } from '../../context/TopicContext';


const CustomPagination = () => {
    const {getTopics} = useContext(topicContext)
    let [count, setCount] = useState(1)
    const history = useHistory()
    const search = new URLSearchParams(history.location.search)

    let allPages = Math.ceil(count / 8)
    let active = search.get(`_page`) || 1;
    let items = []

    async function getPages() {
        let { data } = await axios("http://localhost:8000/topics")
        setCount(data.length)

    }

    useEffect(() => {
        getPages()
    },[])

    useEffect(() => {
        getTopics()
      }, [history.location])
    

    function handleClick(e) {
        getProductsByFilters("_page", e.target.innerText)
        window.scrollTo(0,0)
    }
    function getProductsByFilters(filterKey, filterValue) {

        search.set(filterKey, filterValue)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
    }
    for (let number = 1; number <= allPages; number++) {
        items.push(
            <Pagination.Item onClick={handleClick} key={number} active={number == active}>
                {number}
            </Pagination.Item>
        )
    }
    return (
        <div className="d-flex justify-content-center " style={{background: "transparent"}}>
            <div>
                <Pagination>
                    {items}
                </Pagination>
                <br />

            </div>

        </div>
    );
};

export default CustomPagination;