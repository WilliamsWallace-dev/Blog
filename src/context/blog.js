import {useState,createContext,useEffect } from "react";
import api from "../services/api"


const BlogContext = createContext({});

function BlogProvidor ({children}) {

  let vetAux = [];

  const [categories,setCategories] = useState([]);

  const [search,setSearch] = useState([]);

  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    api.get("http://localhost:4000/posts")
    .then((response)=>{
      setPosts(response.data)
    })
    .catch((error)=>{console.log(error)})
  },[])

  useEffect(()=>{
    api.get("http://localhost:4000/categories")
    .then((response)=>{
      setCategories(response.data)
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
    <BlogContext.Provider value={{posts,setPosts,users,setUsers,userOn,setUserOn,search,setSearch,categories,setCategories}}>
    {children}
    </BlogContext.Provider>
    </>
  )

}

export {BlogContext,BlogProvidor};