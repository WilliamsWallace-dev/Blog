import Header from "./components/Header";
import Main from "./pages/Main/index.js"
// import Article from "./components/Article";

import {useState,useEffect} from "react";
import api from "./services/api"


function App() {
  console.log("renderizei App")

  let [posts,setPosts] = useState([]);

  useEffect(()=>{
    api.get('http://localhost:4000/posts')
    .then((response)=>{
      setPosts(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
},[])
  return (
    <>
      <Header></Header>
      {/* <Article></Article> */}
      <Main posts = {posts} setPost = {setPosts}></Main>
    </>
  );
}

export default App;
