import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


const PostDetails = () => {
    const [Details, setDetails] = useState({})
    const params = useParams()
    const [IsDeleted, setIsDeleted] = useState(false)
    useEffect(() => {
        getDetails()
    }, [])
    useEffect(() => {
        if(Details.length === 0) return <h1>no data</h1>
    }, [IsDeleted])
    
    const getDetails = async () => {
        const DATA = await axios.get(`/post/${params.id}`)
        setDetails(DATA.data.data)
    }
    const deletePost = async (myid) => {
        await axios.delete(`/post/${myid}`)
        setIsDeleted(!IsDeleted)
    }

   
    
    return (
        <div className="all_cont">
            <div className='all'>
                 <h1>My blog ghhhh</h1>
                 <Link to={`/allPosts`}>Home</Link>
                </div>
                <div className='post_container'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title">{Details.title}</p>
                          </div>
                          <div className="btn_container">
                            <Link to={`/updatePost/${Details._id}`}>update</Link>
                            <button onClick={() => deletePost(Details._id)} >delete</button>
                        </div>
                      </div>

                      
                      <div className='spn'>
                        <span>auteur: {Details.author}</span>
                            <div className='resume'>
                                <span>resume:</span>
                                <p>{Details.resume}</p>
                            </div>
                            <p>Conetent: {Details.description}</p>
                      </div>
                      {/* <Link to={`/postDetails/${Details._id}`} key={Details._id} >
                      <p>read more</p>
                    </Link> */}
                  
                    
                </div>
            {/* <h1>title: {Details.title}</h1>
            <h1>author: {Details.author}</h1>
            <h1>description: {Details.description}</h1>
            <h1>resume: {Details.resume}</h1> */}
        </div>
    )
}

export default PostDetails