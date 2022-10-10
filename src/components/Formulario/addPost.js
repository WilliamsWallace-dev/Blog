import api from "../../services/api"
import { useEffect,useState,useContext } from "react";
import Main from "../../pages/Main";
import {BlogContext} from "../../context/blog"



const AddPost = ()=>{

  const {posts,setPosts,userOn,categories,setCategories} = useContext(BlogContext);
    
  let formulario = [];

  //Funções
  //Função Adicionar Post
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
  //Função Adicionar Categoria
  const addCategory = (e)=>{
    let newCategory = e.target.previousSibling.value.toUpperCase();
    api.post('/categories',{ id: `${newCategory}`} )
      .then(function (response) {
        console.log(response)
        setCategories([...categories,{ id: `${newCategory}`}])
      })
      .catch(function (error) {
        console.log(error)
        if(error.request.status === 404)
          alert("Categoria Existente! Insira uma nova categoria.")
      });
  }
  const removeCategory = (e)=>{
    let removeCategory = e.target.previousSibling.value;
    setCategories(categories.filter((category)=> category.id !== removeCategory))
    api.delete(`/categories/${removeCategory}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=> {
      if(error.request.status === 404)
        alert("Categoria não encontrada!")
    })
  }





  if(!userOn || userOn === "Error"){
    return(<></>)
  }else{
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

      <h1>AddCategoria</h1>
      <section className="formulario-container">
      <label id="Category">Category</label>
          <input type="text" placeholder="Category" id="Category"></input>
          <button className="" type="button" onClick={addCategory} >Adicionar</button>
            <select style={{color:"green"}} id="categories" name="categories">
              {
                categories.map((category,index)=>{
                  console.log(index)
                  if(index === 0){
                    return(
                      <>
                      <option selected style={{color:"red"}} value={category.id}  >{category.id}</option>
                      </>
                    )
                  }else{
                    return(
                      <>
                      <option style={{color:"red"}} value={category.id}>{category.id}</option>
                      </>
                    )
                  }
                    
                })
              }
            </select>
          <button className="" type="button" onClick={removeCategory} >Remover</button>
      </section>
      </>
    )
  }
  
}

export default AddPost;