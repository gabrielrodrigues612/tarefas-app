import React, { useEffect, useState } from "react"

import Axios from "axios"


import Card from "./Card"

export default function List(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await Axios.get("https://jsonplaceholder.typicode.com/posts")
            const postsFetched = response.data
            setPosts(postsFetched)
        }
        fetchData()
    }, [posts])
    return(
        <section className="content">
            <header className="header"></header>
            {posts.map(post =>{
                return <Card id={post.id} title={post.title} body={post.body}/>
            })}
            </section>
    )
}