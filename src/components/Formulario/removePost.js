import api from "../../services/api"
import { useEffect,useState,useContext } from "react";

import {BlogContext} from "../../context/blog"


const RemovePost = ()=>{

  const {posts} = useContext(BlogContext);

  

 console.log("renderizei Form ")

  const remove = (id)=>{
    api.delete(`/posts/${id}`)
    .then((response)=>{console.log(response)})
    .catch((error)=>console.log(error))
  }

  return (
    <>
    <section className="removePost container">
      <h1>Remover Post</h1>
      <input type = "text" placeholder="Pesquisar"></input>
      <div className="formulario-container removePost-container ">
      {
        posts.map((post,index,posts)=>{
          console.log(post.id)
          return(
            <>
              <div>
                <button className="button-deletePost" type="button" onClick={()=>remove(post.id)}></button>
              </div>
              <div className= "List-removePost p-1">
                <h5>{post.category}</h5>
                <h3>{post.title}</h3>
                <h6 className = "color-blue-normal">{post.author}</h6>
                <p>{`${post.date} - ${post.time}`}</p>
              </div>
            </>
          )
        })
      }
    <button className="removePost-button" type="button">Enviar</button>
    </div>
    </section>
    </>
  )
}

export default RemovePost;