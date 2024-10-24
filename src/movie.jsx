import PropTypes from 'prop-types';
import './style/movie.css';
import {Link } from "react-router-dom";
import React from 'react';
import { useState } from 'react';


Movie_temp.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    num: PropTypes.string.isRequired,
};




const[Fav, updateFav]=useState([])
const Favs_arry = createContext([]);


const addItem = (newItem) => {
    updateFav(Fav => [...Fav, newItem]);
};


function Movie_temp  ({text,img,title, num}) {

    
return (
    <Favs_arry.Provider value={Fav}>
    <div id = "box">
        <ul>
           <img src= {img} /> 
            <h4>{title}</h4>
            <p>{text}</p>
            <Link to={{ pathname: "/Movie", state: { num } }}>Details</Link>
            <button onClick={addItem({text,img,title})}>Favourite</button>
        </ul>
    </div>
    </Favs_arry.Provider>
);


}

export default Movie_temp;