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

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    api.get("http://localhost:4000/users")
    .then((response)=>{
      console.log(response.data);
      setUsers(response.data);
    })
    .catch((error)=>{console.log(error);})
  },[])
  const [userOn,setUserOn] = useState("");

  return (
    <>
    <BlogContext.Provider value={{posts,setPosts,users,setUsers,userOn,setUserOn}}>
    {children}
    </BlogContext.Provider>
    </>
  )

}

export {BlogContext,BlogProvidor};