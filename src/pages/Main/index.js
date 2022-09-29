import Post from "../../components/Post";
import Formulario from "../../components/Formulario"

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
    <Formulario></Formulario>
      <h1>Articles</h1>
      <div className="article-container mx-1">
        {
          posts.map((post)=>{
            return(
            <Post key = {post.id} subtitulo = {post.category} titulo = {post.title} date = {post.date} timeReading = {post.time}>
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