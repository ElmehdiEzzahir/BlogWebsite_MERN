import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import AllPosts from './components/AllPosts';
import UpdatePost from './components/UpdatePost';
import AddPost from './components/AddPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostDetails from './components/PostDetalis';

function App() {

  return (
    <div className="App">
       
      <Router>
        <Routes>
          <Route path='/allPosts' element={<AllPosts /> } />
          <Route path='/addPost' element={<AddPost />} />
          <Route path='/postDetails/:id' element={<PostDetails />} />
          <Route path='/updatePost/:id' element={<UpdatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
