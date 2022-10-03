import Post from "../../components/Post";
import Formulario from "../../components/Formulario"
import FormLogin from "../../components/FormLogin";

import {BlogContext} from "../../context/blog"
import {useContext} from "react"


const Main = ()=>{

  const {posts,setPosts} = useContext(BlogContext);

  // window.onload = creatMain;

  // async function creatMain (){
  //     try {
  //       const response = await api.get('http://localhost:4000/posts');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

      


  return(
    <>
    <section className="container mt-8">
    <FormLogin></FormLogin>
    <Formulario></Formulario>
      <h1>Articles</h1>
      <div className="article-container mx-1">
        {
          posts.map((post)=>{
            return(
            <Post key = {post.id} id={post.id} category = {post.category} title = {post.title} date = {post.date} time = {post.time} author = {post.author}>
              {post.resume}
            </Post>
            )
          })
        }
        
        {/* <button className="button-post-container" onClick={creatMain}>CliqueAqui</button> */}
      </div>
    </section>
    </>
  )
}

export default Main;