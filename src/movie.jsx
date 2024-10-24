import PropTypes from 'prop-types';
import './style/movie.css';

Movie_temp.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};


function Movie_temp  ({text,img,title}) {

return (
    <div id = "box">
        <ul>
           <img src= {img} /> 
            <h4>{title}</h4>
            <p>{text}</p>
        </ul>
    </div>
);


}

export default Movie_temp;