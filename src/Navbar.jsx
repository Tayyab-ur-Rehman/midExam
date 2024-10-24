import PropTypes from 'prop-types';
import { useState } from 'react';
import './style/navbar.css';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();
const [inputValue, setInputValue] = useState('');
const handleChange = (event) => {
    setInputValue(event.target.value); // Update state
};




return (
<nav>
   
         <div className="search-container">
         <input id="input"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type here..."
                />
         <button id="search-btn">Search</button>
         </div>
       
        <div id="right_nav_comp">

       
        <Link className ="navbar_component_comp" to="/Favourite">Fav</Link>
        <Link className ="navbar_component_comp"to="/">Home</Link>
            
        </div>
</nav>



);


}


export default NavBar;