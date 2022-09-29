import {useState,createContext,useEffect } from "react";
import api from "../services/api"


const BlogContext = createContext({});

function BlogProvidor ({children}) {

  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    api.get("http://localhost:4000/posts")
    .then((response)=>{
      console.log(response)
      setPosts(response.data)
    })
    .catch((error)=>{console.log(error)})
  },[])


  return (
    <>
    <BlogContext.Provider value={{posts,setPosts}}>
    {children}
    </BlogContext.Provider>
    </>
  )

}

export {BlogContext,BlogProvidor};