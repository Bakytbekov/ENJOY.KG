import React, { useContext, useState } from 'react';
import { topicContext } from '../../context/TopicContext';
import '../AddTopics/AddTopics.css'

const AddTopics = () => {
    const [topic, setTopic] = useState({
        title: '',
        description: '',
        img: '',
        price: '',
        comments: []
    })
    const { postNewTopic } = useContext(topicContext)

    const handleValues = (e) => {
        // console.log(e.target.value);
        let newTopic = {
            ...topic,
            [e.target.name]: e.target.value
        }
        setTopic(newTopic)
    }

    const handleClick = () => {
        postNewTopic(topic)

        setTopic({
            title: '',
            description: '',
            img: '',
            price: ''

        })
    }

    return (
        <div className="inps">
            <input className="inp-add" value={topic.title} name="title" onChange={handleValues} type="text" placeholder="Заголовок" />
            <input className="inp-add" value={topic.description} name="description" onChange={handleValues} type="text" placeholder="Описание" />
            <input className="inp-add" value={topic.img} name="img" onChange={handleValues} type="text" placeholder="Изображение" />
            <input className="inp-add" value={topic.price} name="price" onChange={handleValues} type="text" placeholder="Цена" />
            <button className="btn-add" onClick={handleClick}>Добавить</button>
        </div>
    );
};

export default AddTopics;