import React from 'react'
import './style.css'
import Card from '../../../component/UI/Card';

const RecentPost = (props) => {
    return (
        <div style={props.style}>
            <Card style={{ marginBottom: '20px' }}>
                <div className="postImageWrapper">
                    <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt="sideImage" />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <span>Featured</span>
                    <h2>Fitness Mantra to Live Fit Life</h2>
                    <span>Posted on July 21, 2016 bySora Blogging Tips</span>
                    <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evenin...</p>
                    <button>Read More</button>
                </div>

            </Card>
        </div>
    )
}
export default RecentPost;