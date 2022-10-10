import {Link, Outlet} from "react-router-dom";
import FormLogin from "../FormLogin/index"
import {useContext} from "react"
import { BlogContext } from "../../context/blog";

function HeaderForm () {

  const {userOn} = useContext(BlogContext);

  if(!userOn || userOn === "Error"){
    return (<FormLogin></FormLogin>)
  }else{
  return(
  <>
  <section>
      <h1>Remover Post</h1>
      <input type = "text" placeholder="Pesquisar"></input>
    <Link className="p-2" to="/gerenciarPosts">Gerenciar Artigo</Link>
    <Link className="p-2" to="/gerenciarPosts/addPost">Adicionar Artigo</Link>
    <Outlet></Outlet>
  </section>
  </>
  
  )
  }
}

export default HeaderForm;