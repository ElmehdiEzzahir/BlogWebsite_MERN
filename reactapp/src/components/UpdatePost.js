import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function UpdatePost() {
    const params = useParams()

    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState('')
    const [Description, setDescription] = useState('')
    const [Resume, setResume] = useState('')
    const [Details, setDetails] = useState({})

    useEffect(() => {
        console.log(params.id);
        getDetails()
    }, [])

    useEffect(() => {
        setAuthor(Details.author)
        setDescription(Details.description)
        setResume(Details.resume)
        setTitle(Details.title)
    }, [Details])
    

    const getDetails = async () => {
        const DATA = await axios.get(`/post/${params.id}`)
        setDetails(DATA.data.data)
        console.log(DATA.data.data);
            
    }
    
    const updatePost = async e => {
        e.preventDefault()
        const res = await axios.put(`/post/${params.id}`, { 
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
            <form className='form'>
            <h3> update post</h3>
                <label>title:</label>
                <input type="text" onChange={e => setTitle(e.target.value)} placeholder='title...' value={Title} />
                <label>author:</label>
                <input type="text" onChange={e => setAuthor(e.target.value)} placeholder='author...' value={Author} />
                <label>content:</label>
                <input type="text" onChange={e => setDescription(e.target.value)} placeholder='description...' value={Description} />
                <label>resume:</label>
                <input type="text" onChange={e => setResume(e.target.value)} placeholder='resume...' value={Resume} />
                <button onClick={updatePost} >Update post</button>
            </form>
        </div>
    )
}

export default UpdatePost