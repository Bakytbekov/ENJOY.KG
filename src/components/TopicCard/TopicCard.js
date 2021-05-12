import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { topicContext } from '../../context/TopicContext';
import './TopicCard.css'
import Truncate from 'react-truncate';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const TopicCard = (props) => {
    const { addProductToCard, checkProductInCart } = useContext(topicContext)
    return (
        <div class="card movie_card">
            <div style={{ position: 'relative' }} >
                <img src={props.item.img} class="card-img-top" alt="..." />
            </div>

            <div class="card-body" >
                {/* <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                    </i> */}
                <Link to={`/details/${props.item.id}`}>
                    <h1 class="card-title">{props.item.title}</h1>
                    <p className="card-desc" style={{ fontSize: "18px" }}>
                        <Truncate lines={2} ellipsis={<span>...</span>}>
                            {props.item.description}
                        </Truncate>
                    </p>
                    <Typography variant="h6" style={{ color: "black" }}>
                        {props.item.price}сом
                    </Typography>
                   
                </Link>
                <div class="tour_info" style={{ padding: "10px 0" }}>

                    <button onClick={() => addProductToCard(props.item)}
                        color={checkProductInCart(props.item.id) ? "secondary" : "primary"}>
                        <BookmarkBorderIcon/>
                    </button>
                    <span class="tour_info" style={{ float: "right" }}><i class="fas fa-star"></i> 1 / 5</span>
                </div>

            </div>
        </div>
    );
};

export default TopicCard;