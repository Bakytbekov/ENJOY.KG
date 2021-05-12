import { Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { topicContext } from '../../context/TopicContext'
import './TopicDetails.css'
import Truncate from 'react-truncate';
import { Button, Form, ListGroup } from 'react-bootstrap';

// import AddTopics from '../AddTopics/AddTopics';
// import TopicList from '../TopicList/TopicList';

const TopicDetails = (props) => {
    const { getTopicDetails, topicDetails, saveTopic, deleteTask, sendComment } = useContext(topicContext)
    console.log("topicDetails", topicDetails)
    const [editStatus, setEditStatus] = useState(false)
    const [editedTopic, setEditedTopic] = useState();
    
    const history = useHistory()
    const handleValue = (e) => {
        let newtopic = {
            ...editedTopic,
            [e.target.name]: e.target.value
        }
        setEditedTopic(newtopic)
    }

    const handleSave = () => {
        saveTopic(props.match.params.id, editedTopic)
        setEditStatus(false)
    }

    const handleDelete = () => {
        deleteTask(props.match.params.id)
        history.push("/")
    }

    useEffect(() => {
        setTimeout(() => {

            getTopicDetails(props.match.params.id)
        }, 300)

        getTopicDetails(props.match.params.id)

    }, [props.match.params.id])

    const [coment, setComent] = useState({
        name: "",
        comment: "",
        id: Date.now()
    })

    function handleChange(e) {
        let newComent = {
            ...coment,
            [e.target.name]: e.target.value
        }
        setComent(newComent)
    }

    function handleSubmit(e) {
        e.preventDefault()
        topicDetails.comments.push(coment)
        sendComment(topicDetails)
        setComent({
            name: "",
            comment: "",
            id: Date.now()
        })
    }

    return (

        <div>
            {topicDetails ? (
                <div>
                    <div className="wraper d-flex flex-wrap justify-content-between container mt-5">
                        <div className="main-left col-lg-4 col-12">
                            <div className="main-box">

                                {editStatus ? (
                                    <div className="edit-textareas">
                                        <textarea name="title" onChange={handleValue}>{topicDetails.title}</textarea>
                                        <textarea name="description" className="box-desc" onChange={handleValue} >{topicDetails.description}</textarea>
                                        <textarea name="img" onChange={handleValue}>{topicDetails.img}</textarea>
                                        <textarea name="price" onChange={handleValue}>{topicDetails.price}</textarea>
                                        {/* <textarea name="secondImg" onChange={handleValue}>{topicDetails.secondImg}</textarea> */}
                                        {/* <textarea name="subTitle" onChange={handleValue}>{topicDetails.subTitle}</textarea> */}
                                        {/* <textarea name="secondDescription" className="box-desc" onChange={handleValue}>{topicDetails.secondDescription}</textarea> */}
                                    </div>
                                ) : (
                                    <>
                                        <div class="card tour_card">
                                            <img src={topicDetails.img} class="card-img-top" alt="..." />
                                            <div className="card-body">
                                                {/* <i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                                        </i> */}
                                                <h2 className="card-title">{topicDetails.title}</h2>
                                                <p className="card-desc" style={{ fontSize: "18px" }}>
                                                    <Truncate lines={2} ellipsis={<span>...</span>}>
                                                        {topicDetails.description}
                                                    </Truncate>
                                                </p>
                                                <Typography variant="h6" style={{ color: "black" }}>
                                                    {topicDetails.price} $
                                        </Typography>
                                                {/* <span className="movie_info">2019</span> */}
                                                <span className="tour_info float-right" style={{ float: "right" }}><i className="fas fa-star"></i> 9 / 10</span>
                                            </div>
                                        </div>
                                        {/* 
                                <h1>{topicDetails.title}</h1>
                                <p className="box-desc">{topicDetails.description}</p>
                                <img  src={topicDetails.img} alt="topic-img"/> */}
                                        {/* <h2>{topicDetails.subTitle}</h2> */}
                                        {/* <img src={topicDetails.secondImg} alt="topic-img"/> */}
                                    </>
                                )}

                                <div className="details_btns">
                                    {editStatus ? (
                                        <button className="trio" onClick={handleSave}>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX/////VXZES1S3OVhBSFJYXWU8S1ONTl//VXj/UnSNkJTwVHN7TVw8RE3/gpr/9vj/kqb0bYn34ufv1Nv4fZTAWHC0Kk7dr7jzUHGyN1brydFuRlW8OFhgZm03P0n19fbdU3BZTFjLzc9xd32AhIrr7O26vcDc3d6NXWyNjJJuTVvkVHJxTVv/ZIKDh42jpaqXmp9lTVmxUGelT2XLUmyETl7Lcoi+T2nTU22yIUjbqrRNTFdVTFeKa3eGfoV0en/yjUtEAAADfElEQVR4nO3d61LaQBiAYYIhBmzUarX0kAXBREVFUKnYE/d/V0WtJOSwOmTDbpj3/etMlsdvWZxhxq3ViIiIiIiIiIiIiIiIKlYQtvp+w4z8fisM1PI6oS+EZ5uTJ4QfdtT5er6w66ZlC7+nyBiMDPQ9ZYuRkr16NvN0U3LzZmcKgH0zB/iS3S9MDGYmA+fEWcGN2hmZu0Vf8kbFjpue0C14M9ErNEI/vkedrLyyy1w19qpsv8gQw9gInfpgsp3q/KJVbhfn6UUn43rMKMICwtgIncFt13KTNXcLPP197TZTq7and2MnNsTVHx5EI3QmXde1UjV399RZMtvbbaaXda37QUQUqx+n0SZ1Bt30OvqE8+5PVGzTVvRRcZsxQK1C624xRK+18tMXf87MR2ia0I2GaPdXfvrioHEm2b9HnTO8vHodYoGjprEQbmePUKdw58NC2Fj56QgRqgghQnkIEaoIIUJ5CBGqCCFCeQgRqgghQnkIEaoIIUJ5CBGqCCFCeQgRqgghQnkIEaoIIUJ5CBGqCCFCeQgRqgghQnkIEapIv1AhJjvNQut6v+yuc1Zel9Bqll3ewmsTagshQoT6Q4gQof4QIkSoP4QIEeoPIUKE+kOIEKH+ECJcSVjitxRmCN2PxWunyltZg7D56WDllV47PPqSaGtn04RbyRAiRIgQIUKECLULDw6TyX8L1RP+OEr08HnDhEfHidd7vHHC5OtFiBAhQoQIESJEiBAhQoQIESJEiBAhQoQI9Qrr4+mmC99DzBI+PB4v9/jTVKFzknOLpVx4+DWZWd+uxW9Vd369RaziN6TxC4/fJlZRWDuN3zvu/JYTKykMhkvE8VRGrKSwFrSWbo8fyIjVFKaIko1aUWEtWHov1seX+f/HZb1CJfcBP9dZPm5OconrFaq50zmT+DuPuGZh7F7uUdFl3znF9QrV3K3+WuJDI+e4WaPQte4HTiTsFF43eaJedd2MrvdVCL8na6cWstrTu3EELPw2fC75obGd0fmfi1bR/l59SzZJrzQZ1yNgXfRUCJMbNTPbK55TT5a1Uvznnq9gkz61fNwYlKdmhOYSvRtFIzSVaA8DZcA5cWgc0Z6dKQSmTlT9eUO1QNOInnejcov+J5qzUW3h99QdMjHiqfBs/XlC9EvxPRXOGrrz+6OwLB4REREREREREREREVFp/QP7Rg3dlCrBMwAAAABJRU5ErkJggg==" alt="btn-icon" />
                                Сохранить
                                        </button>
                                    ) : (
                                        <button className="trio" onClick={() => setEditStatus(true)}>
                                            <img src="data:data:image/png;base64,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" alt="btn-icon" />
                                Редактировать
                                        </button>
                                    )}

                                    <button className="trio" onClick={handleDelete}>
                                        <img src="https://cdn2.iconfinder.com/data/icons/medical-and-health-2-16/65/64-512.png" alt="btn-icon" />
                                Удалить
                            </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <h2>Коментарии</h2>
                            <ListGroup>
                                {topicDetails.comments.map(item => ( 
                                    <ListGroup.Item key={item.id}><strong>{item.name}</strong> <br></br>{item.comment}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                        <div className="col-lg-3 col-12" >
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Ваше имя</Form.Label>
                                    <Form.Control name="name" value={coment.name} onChange={handleChange} type="text" placeholder="Введите ваше имя" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Ваш коментарий</Form.Label>
                                    <Form.Control name="comment" value={coment.comment} onChange={handleChange} type="text" placeholder="Введите ваш коментарий" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Оставить коментарий
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            )
                : (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)}
        </div>
    );
};

export default TopicDetails;