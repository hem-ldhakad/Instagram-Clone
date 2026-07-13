import React from 'react'
import axios from 'axios'

export default function Feed() {
    const [posts, setPosts] = React.useState([{
        _id: "",
        image: "",
        caption: ""
    }])
    React.useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) =>{
            setPosts(res.data.posts)
        })
    }, [])

    return (
        <section className='feed-section'>
         {
            posts.length > 0 ? (
                posts.map((post) => (
                <div key={post._id}
                className ='post-card'>
                    <img src={post.image} alt={post.caption}/>
                    <p>{post.caption}</p>
                </div>
                ))
            ) : (
                <h1>no posts Avaliable</h1>
            )
         }
        </section>
    )
}