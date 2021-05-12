import React from 'react';
import './AnimationCard.css'

const AnimationCard = () => {
    return (
        <>
           
            <div class="accordion">
                <ul>
                    <li>
                        <div class="image_title">
                            <a href="#"> Дубай</a>
                        </div>
                        <a href="https://pixabay.com"><img src="https://cdn.pixabay.com/photo/2020/01/02/22/11/dubai-4736936__340.jpg" alt="dubai" border="0"/></a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Мальдивы</a>
                        </div>
                        <a href="https://pixabay.com"><img src="https://cdn.pixabay.com/photo/2018/01/28/10/21/body-of-water-3113219__340.jpg" alt="maldivy" border="0"/></a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Кыргызстан , Ыссык-Куль</a>
                        </div>
                        <a href="https://pixabay.com"><img src="https://cdn.pixabay.com/photo/2019/08/24/17/40/clouds-4428025__340.jpg" alt="ik" border="0"/></a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Стамбул</a>
                        </div>
                        <a href="https://pixabay.com"><img src="https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Turkey-10-Cappadocia-e1491888166680.jpg" alt="ik" border="0"/></a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Гуанчжоу</a>
                        </div> 
                        <a href="https://pixabay.com"><img src="https://cdn.pixabay.com/photo/2016/02/15/09/32/canton-tower-1200872__340.jpg" alt="ik" border="0"/></a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AnimationCard;