import api from "../../services/api"
import { useEffect,useState,useContext } from "react";

import {BlogContext} from "../../context/blog"

const EditarPost = ()=>{

}

const GerenciarPost = ()=>{

  const {posts,setPosts} = useContext(BlogContext);
  const [update,setUpdate] = useState([]);

  //Função que apresenta o formulario para editar o Post selecionado
  const Card = ([id,option])=>{
    setUpdate([id,option]);
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
          if(update[0] === post.id && update[1] === "update"){
            return(
              <>
                <div className= "List-removePost p-1">
                  <h5>{post.category}</h5>
                  <h3>{post.title}</h3>
                  <h6 className = "color-blue-normal">{post.author}</h6>
                  <p>{`${post.date} - ${post.time}`}</p>
                </div>
                <div>
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
                  <button className="" type="button" onClick={()=>EditarPost()} >Enviar</button>
                  <button className="" type="button" onClick={()=>Card("")} >Cancelar</button>
                  </section>
                </div>
              </>
            )
          }if(update[0] === post.id && update[1] === "view"){
            return(
              <>
                <div className= "List-removePost p-1">
                  <section className= "post-container p-1">
                    <h5>{post.category}</h5>
                    <h3>{post.title}</h3>
                    <p>{post.resume}</p>
                    <p>{post.description}</p>
                    <div className="inf-container mt-3">
                        <h6 className = "color-blue-normal">{post.author}</h6>
                        <p>{`${post.date} - ${post.time}`}</p>
                    </div>
                  </section>
                  <button className="" type="button" onClick={()=>Card("")} >Voltar</button>
                </div>
              </>
            )
          }else return(
                  <>
                    <div>
                        <button style={{padding: .5+"rem" + " " + 1.5 +"rem"}} className="button-deletePost" type="button" onClick={()=>remove(post.id)}>Delete</button>
                        <button style={{padding: .5+"rem" + " " + 1.5 +"rem"}} className="button-editePost" type="button" onClick={()=>Card([post.id,"view"])} >Ler Mais</button>  
                        <button style={{padding: .5+"rem" + " " + 1.5 +"rem"}} className="button-lerMaisPost" type="button" onClick={()=>Card([post.id,"update"])}>Editar</button>                                     
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
                    </div>
                  </>
  )
}

export default GerenciarPost;