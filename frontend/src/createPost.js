import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {

const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
        navigate("/feed")
    })
}

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} className='form'>
            <input className='image' type='file' name="image" accept="image/*" />
            <input className='textarea' type="text" name="caption" placeholder='enter caption' required />
            <button className="button" type="submit">Submit</button>
        </form>
    </section>
  )
}
