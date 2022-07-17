import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Main from '../pages/Main';
import AddPost from '../pages/AddPost';
import About from '../pages/About';

function AppRouter() {
  return (
    <Routes>
          <Route path='/home' element= {<Main/>} />
          <Route path='/addpost' element= {<AddPost/>} />
          <Route path='/about' element= {<About/>} />
          <Route path='/random' element= {<h1>{Math.random()}</h1>} />
          <Route path='*' element= {<Navigate to='/home' />} />
    </Routes>
  )
}

export default AppRouter