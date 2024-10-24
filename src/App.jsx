import { useState } from 'react'
import Home  from './home';
import FavPage from './FavouritePage';
import MoviePage from './moviePage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
                <Route exact path="/" element ={<Home/>}></Route>
                <Route exact path="/Favourite" element ={<FavPage/>}></Route>
                <Route exact path="/Movie" element ={<MoviePage/>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
