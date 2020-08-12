import React from 'react';
import "./style.css";
import Card from '../../component/UI/Card';
import BlogPost from '../../component/BlogPost';
import Sidebar from '../../component/Sidebar';


const Post = (props) => {

    console.log(props);

    return (
        <section className="container">
            <BlogPost {...props}/>
            <Sidebar />
        </section>
    )
}
export default Post;