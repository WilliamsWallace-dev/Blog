import Header from "./components/Header";
import Main from "./pages/Main/index.js"
// import Article from "./components/Article";

import {useState,useEffect} from "react";
import api from "./services/api"

import {BlogProvidor} from "./context/blog"


function App() {
  console.log("renderizei App")

  return (
    <>
      <BlogProvidor>
        <Header></Header>
        <Main></Main>
      </BlogProvidor>
      
    </>
  );
}

export default App;
