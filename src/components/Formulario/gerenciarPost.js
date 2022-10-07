import api from "../../services/api"
import { useEffect,useState,useContext } from "react";

import {BlogContext} from "../../context/blog"



const GerenciarPost = ()=>{

  const {posts,setPosts} = useContext(BlogContext);
  const [update,setUpdate] = useState([]);

  //Função para Ler mais sobre o Post
  const View = (e)=>{
    let containerText = e.target.parentElement.previousSibling;
    containerText = containerText.querySelector(".container-text-post");
    containerText.classList.toggle("active");
    if(containerText.classList.contains("active")){
      containerText.style.maxHeight = containerText.scrollHeight + "px";
      e.target.innerHTML = "Voltar"
    }
      
      else{
        containerText.style.maxHeight = 0 + "px";
        e.target.innerHTML = "Ler Mais"
      }
    }

  //Função que apresenta o formulario para editar o Post selecionado
  const Edit = (id)=>{
    setUpdate(id);
    if(id === ""){
      api.get("http://localhost:4000/posts")
      .then((response)=>{
      setPosts(response.data)
    })
    .catch((error)=>console.log(error))
    }
  }

  
  //Função que Edita o Post selecionado
  
  const EditarPost = (e,id)=>{
    let form = [];

    e.target.previousSibling.querySelectorAll("input").forEach((element,index)=>{
    form = [...form,element.value]
    element.value = "";
    })
    e.target.previousSibling.querySelectorAll("textarea").forEach((element,index)=>{
      form = [...form,element.value]
      element.value = "";
    })

  form.forEach((element,index)=>{

    if(element !== "" && index === 0){
      api.patch(`/posts/${id}`,{
        category : `${element}`
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }
    if(element !== "" && index === 1){
      api.patch(`/posts/${id}`,{
        title : `${element}`
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }
    if(element !== "" && index === 2){
      api.patch(`/posts/${id}`,{
        author : `${element}`
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }
    if(element !== "" && index === 3){
      api.patch(`/posts/${id}`,{
        date : `${element}`
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }
    if(element !== "" && index === 4){
      api.patch(`/posts/${id}`,{
        time : `${element}`
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }
    if(element !== "" && index === 5){
      api.patch(`/posts/${id}`,{
        resume : `${element}`
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }
    if(element !== "" && index === 6){
      api.patch(`/posts/${id}`,{
        description : `${element}`
      })
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }

  })
}
  
  //Função que remove a Post selecionado.
  const remove = (id)=>{


    // setPosts(post =>{
    //   post.splice(id,1)
    //   console.log(post)
    //   return post
    // } );
    setPosts(posts.filter((post)=>post.id != id))


    api.delete(`/posts/${id}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>console.log(error))
    
  }



  return (
    <>
    
      <div className="formulario-container removePost-container ">
      {
        posts.map((post,index,posts)=>{
          if(update === post.id){
            return(
              <>
                <section className="formulario-container">
                  <form>
                    <label>Category</label>
                    <input type="text" placeholder="Category"></input>
                    <label>Titulo</label>
                    <input type="text" placeholder="Titulo"></input>
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
                  <button className="" type="button" onClick={(e)=>EditarPost(e,post.id)} >Enviar</button>
                  <button className="" type="button" onClick={()=>Edit("")} >Cancelar</button>
                  </section>
              </>
            )
          }
          // if(update[0] === post.id && update[1] === "view"){
          //   return(
          //     <>
          //       <div className= "List-removePost p-1">
          //         <section className= "post-container p-1">
          //           <h5>{post.category}</h5>
          //           <h3>{post.title}</h3>
          //           <p>{post.resume}</p>
          //           <p>{post.description}</p>
          //           <div className="inf-container mt-3">
          //               <h6 className = "color-blue-normal">{post.author}</h6>
          //               <p>{`${post.date} - ${post.time}`}</p>
          //           </div>
          //         </section>
          //         <button className="" type="button" onClick={()=>Card("")} >Voltar</button>
          //       </div>
          //     </>
          //   )
          // }
          else return(
                  <>
                    
                      <section className= "List-removePost post-container p-1">
                        <h5>{post.category}</h5>
                        <h3>{post.title}</h3>
                        <div className="container-text-post" style={{maxHeight: 0 +"px",overflow:"hidden"}} >
                        <p>{post.resume}</p>
                        <p>{post.description}</p>
                        </div>
                        <h6 className = "color-blue-normal">{post.author}</h6>
                        <p>{`${post.date} - ${post.time}`}</p>
                      </section>

                    <div>
                        <button style={{padding: .5+"rem" + " " + 1.5 +"rem"}} className="button-deletePost" type="button" onClick={()=>remove(post.id)}>Delete</button>
                        <button style={{padding: .5+"rem" + " " + 1.5 +"rem"}} className="button-editePost" type="button" onClick={(e)=>View(e)} >Ler Mais</button>  
                        <button style={{padding: .5+"rem" + " " + 1.5 +"rem"}} className="button-lerMaisPost" type="button" onClick={()=>Edit(post.id)}>Editar</button>                                     
                    </div>
                  </>
                    )
                })
              }
                    </div>
                  </>
  )
}

export default GerenciarPost;