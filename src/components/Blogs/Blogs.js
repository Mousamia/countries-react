import React, { useEffect, useState } from 'react';
import Post from '../Posts/Post';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('posts.json')
        .then(res => res.json())
        .then(data => setBlogs(data));



    }, []);
    return (
      
        <div className='main'>
            <div className="blogs-post">
                {/* <h2>Blogs  here {blogs.length} </h2> */}

                {
                    blogs.map(blog => <Post blog={blog}> </Post> )
                }
                
              
            </div>
            <div className="bookmarks">
                <h6>Spent Time on Read: <span>177min</span></h6>
            </div>
        </div>
    );
};

export default Blogs;