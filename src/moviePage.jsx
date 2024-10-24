import PropTypes from 'prop-types';
import { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";


function MoviePage(props) {


const loc=useLocation()


return (
<div>{loc.state.num}</div>

);


}


export default MoviePage;