import Post from "../../components/Post";
import {useState} from "react";
import api from "../../services/api"

const Main = ()=>{

  const [posts,setPosts] = useState([]);

  window.onload = creatMain;

  async function creatMain (){
      try {
        const response = await api.get('http://localhost:4000/posts');
        setPosts(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }

  return(
    <>
    <section className="container mt-8">
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