import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllPosts() {
    const [Data, setData] = useState([])
    const [IsDeleted, setIsDeleted] = useState(false)
  
    const getPosts = async () => {
      const myData = await axios.get('/post')
      console.log(myData.data.woooow)
      setAnasData(myData.data.woooow)
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        getPosts()
    }, [IsDeleted])

    const deletePost = async (myid) => {
        await axios.delete(`/post/${myid}`)
        setIsDeleted(!IsDeleted)
    }
    
    return (
      <div className="App">
        <div className='all'>
                 <h1>My blog ghhhh</h1>
                 <Link to={`/addpost`}>addPost</Link>
                </div>
                <div className='all_cont'>
        {
          Data.map((d) => {
            return (
                <div className='post_container'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title">{d.title}</p>
                          </div>
                          <div className="btn_container">
                            <Link to={`/updatePost/${d._id}`}>update</Link>
                            <button onClick={() => deletePost(d._id)} >delete</button>
                        </div>
                      </div>  
                      <div className='spn'>
                      <span>auteur: {d.author}</span>
                      <div className='resume'>
                      <span>resume:</span>
                      <p>{d.resume}</p>
                      </div>
                      </div>
                      <Link to={`/postDetails/${d._id}`} key={d._id} >
                      <p>read more</p>
                    </Link>
                  
                    
                </div>
              
            )
          })
        }
        </div>
      </div>
    );
}

export default AllPosts
