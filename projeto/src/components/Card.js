import React from "react"
import "./styleComponents.css"


export default function Card({title, body, id}){
    
    return (
        <div class="card" id={id} >
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{body}</p>
                        
                    </div>
                    <a href={`https://jsonplaceholder.typicode.com/posts/${id}`} class="btn btn-dark">Visitar</a>
                </div>
    )
}
