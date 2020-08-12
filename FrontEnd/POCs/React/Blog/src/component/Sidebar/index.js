import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    },[posts]);



    return (
        <div className="sidebarContainer" style={{
            width:props.width
        }}>
            <Card style={{ marginBottom: '20px' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://fitnessista.com/wp-content/uploads/2017/08/Gina-Harney-The-Fitnessista.jpg"></img>
                </div>

                <div className="cardBody">
                    <p className="personalBio"> Hi, gorgeous! I'm so glad you're here.
                    Welcome to The Fitnessista, a healthy lifestyle
                    blog emphasizing quick workouts, quick recipes and
                    adventures as a wife and mom. Though I am a certified
                    personal trainer, group fitness instructor and weight
                    loss specialist, the information posted here is not intended
                    to substitute the advice of a medical professional. </p>

                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent post</span>

                </div>

                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>

                            );
                        })
                    }


                </div>
            </Card>

        </div>

    )
}
export default Sidebar;