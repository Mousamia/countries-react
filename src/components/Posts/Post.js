import React from 'react';

const Post = (props) => {
    const {id, name, image} = props.blog ;
    console.log(props.blog.name);
    return (
        <div>
           <div>
            <img  alt="" />
            <div>
                <img src={image} alt="" />
                <h5>{name}</h5>
                <h5>Mar 20 (10 days ago)</h5>
            </div>


           </div>

         
        </div>
    );
};

export default Post;