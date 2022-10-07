import api from "../../services/api"
import { useEffect,useState,useContext } from "react";

import {BlogContext} from "../../context/blog"


const AddPost = ()=>{

  const {posts,setPosts} = useContext(BlogContext);

  

 console.log("renderizei Form ")

  
  
  let formulario = [];

  const add = ()=>{
        document.querySelectorAll(".formulario-container input").forEach((element,index)=>{
          formulario[index] = element.value
          element.value = "";
        })
        // formulario[formulario.length] = document.querySelectorAll('.formulario-container textarea').value;
        // formulario = [...formulario,...document.querySelectorAll('.formulario-container textarea')]
        document.querySelectorAll('.formulario-container textarea').forEach((element,index)=>{
          formulario = [...formulario,element.value]
          element.value = "";
        })
        console.log(formulario)
        api.post('/posts', {
        id : posts.length + 1 ,
        category: `${formulario[0]}`,
        title: `${formulario[1]}`,
        author: `${formulario[2]}`,
        date: `${formulario[3]}`,
        time: `${formulario[4]}`,
        resume: `${formulario[5]}`,
        description: `${formulario[6]}`
        })
        .then(function (response) {
          console.log(response);
          setPosts([...posts,{
            id : posts.length + 1 ,
        category: `${formulario[0]}`,
        title: `${formulario[1]}`,
        author: `${formulario[2]}`,
        date: `${formulario[3]}`,
        time: `${formulario[4]}`,
        resume: `${formulario[5]}`,
        description: `${formulario[6]}`
        }])
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