import React from 'react';
import {DishData} from "interfaces/globalInterfaces";

interface Props {
    dishData: DishData;
}

const stars = (numberOfStars: number): string => {
    let stars = '';
    for (let i = 0; i < numberOfStars; i++) {
        stars += "★";
    }
    for (let i = 0; i < 5 - numberOfStars; i++) {
        stars += "☆";
    }
    return stars;
}

const MenuItem: React.FC<Props> = ({dishData}) => {
    const {id, image, name, origin, starRating} = dishData;
    return (
        <div id={id.toString()}>
            <div className="small">
                <article className="recipe">
                    <div className="pizza-box">
                        <img
                            src={image}
                            width="1500" height="1368" alt="" />
                    </div>
                    <div className="recipe-content">
                        <p className="recipe-tags">
                            <span className="recipe-tag">{origin}</span>
                        </p>
                        <h1 className="recipe-title"><a href="#">{name}</a></h1>
                        <p className="recipe-metadata">
                            <span className="recipe-rating">{stars(starRating)}</span>
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default MenuItem;
