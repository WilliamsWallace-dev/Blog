import {BrowserRouter,json,Route,Routes} from "react-router-dom";
import { useContext } from "react";

import Main from "../pages/Main"
import Article from "../pages/Article"
import Header from "../components/Header"
import FormLogin from "../components/FormLogin";
import Formulario from "../components/Formulario";

import { BlogContext } from "../context/blog";

const BlogRoutes = ()=>{

  const {posts} = useContext(BlogContext);
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route   path="/" element={<Header/>}>
          <Route  index element= {<Main/>} ></Route>
          <Route  path="login"element= {<FormLogin/>} ></Route>
          <Route  path="gerenciarPosts"element= {<Formulario/>} ></Route>

          {
            posts.map((post)=>{
              let id = JSON.stringify(post.id);
              
              return (
                <>
                  <Route  path ={`articles/${id}`}  element = {<Article id={post.id} category={post.category} title={post.title}  resume={post.resume}  description={post.description}  author={post.author}  date={post.date}  time={post.date}></Article>} ></Route>
                </>
                )
              })
            }
            <Route path="articles/1" element = {<Article/>}></Route>
           
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default BlogRoutes;