import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function AddPost() {

    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState('')
    const [Description, setDescription] = useState('')
    const [Resume, setResume] = useState('')

    const createPost = async e => {
        e.preventDefault()
        const res = await axios.post('/post', { 
            title: Title,
            author: Author,
            description: Description,
            resume: Resume  
        })

        if(res) window.location.pathname = '/allposts'
    }

    return (
       
        <div>
             <div className='all'>
                 <h1>My blog ghhhh</h1>
                 <Link to={`/allPosts`}>Home</Link>
                </div>
            {/* <h1>title: {Title}</h1> */}
            
           
            <form className='form'>
            <h3> Nouveau post</h3>
                <label>title:</label>
                <input type="text" onChange={e => setTitle(e.target.value)} placeholder='title...' />
                <label>author:</label>
                <input type="text" onChange={e => setAuthor(e.target.value)} placeholder='author...' />
                <label>content:</label>
                <input type="text" onChange={e => setDescription(e.target.value)} placeholder='description...' />
                <label>resume:</label>
                <input type="text" onChange={e => setResume(e.target.value)} placeholder='resume...' />
                <button onClick={createPost} >Add post</button>
            </form>
        </div>
    )
}

export default AddPost