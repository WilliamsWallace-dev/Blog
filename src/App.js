import Header from "./components/Header";
import Main from "./pages/Main/index.js"
import Article from "./pages/Article";

import BlogRoutes from "./routes/index";

import {useState,useEffect} from "react";
import api from "./services/api"

import {BlogProvidor} from "./context/blog"


function App() {
  console.log("renderizei App")

  return (
    <>
      <BlogProvidor>
        <BlogRoutes></BlogRoutes>
      </BlogProvidor>
      
    </>
  );
}

export default App;
