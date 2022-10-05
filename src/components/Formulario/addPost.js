import api from "../../services/api"
import { useEffect,useState,useContext } from "react";

import {BlogContext} from "../../context/blog"


const AddPost = ()=>{

  const {posts} = useContext(BlogContext);

  

 console.log("renderizei Form ")

  
  
  let formulario = [];

  const add = ()=>{
        document.querySelectorAll(".formulario-container input").forEach((element,index)=>{
          formulario[index] = element.value
        })
        formulario[formulario.length] = document.querySelector('.formulario-container textarea').value;
        console.log(posts.length)
        api.post('/posts', {
        id : `${posts.length + 1}`,
        category: `${formulario[0]}`,
        title: `${formulario[1]}`,
        subtitle: `${formulario[2]}`,
        resume: `${formulario[3]}`,
        description: `${formulario[4]}`,
        author: `${formulario[5]}`,
        date: `${formulario[6]}`,
        time: `${formulario[7]}`,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <>
    <h1>AddPost</h1>
    <section className="formulario-container">
      <form>
        
        <label>Category</label>
        <input type="text" placeholder="Category"></input>
        <label>Titulo</label>
        <input type="text" placeholder="Titulo"></input>
        <label>Subtitulo</label>
        <input type="text" placeholder="Subtitulo"></input>
        <label>Resume</label>
        <textarea rows="4" cols="50" placeholder="Resume"></textarea>
        <label>Description</label>
        <textarea rows="4" cols="50" placeholder="Description"></textarea>
        <label>Author</label>
        <input type="text" placeholder="Subtitulo"></input>
        <label>Date</label>
        <input type="date" placeholder="Date"></input>
        <label>Time Reading</label>
        <input type="number" placeholder="Time Reading"></input>
      </form>
    <button className="" type="button" onClick={add} >Enviar</button>
    </section>
    </>
  )
}

export default AddPost;