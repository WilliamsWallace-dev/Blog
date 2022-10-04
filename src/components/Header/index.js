import logo from "../../svg/logo.svg";
import { Link,Outlet } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../context/blog";

const Header = () => {
  //Deletar
  console.log("renderizei Header")

  //Dados
  const {userOn} = useContext(BlogContext);

  //Funções
  const ActiveMenuUse = ()=>{
    document.querySelector(".nav-menu-user").classList.toggle("active-nav-menu-user");
  }


  //return JSX
  if(!userOn || userOn === "Error"){
    return (
      <>
        <section className="container header-container">
          <img src={logo} alt="Logo do Blog"></img>
          <input type="text" name="search" placeholder="Buscar artigos,podcasts,destaques..."></input>
          <div className="nav-link-container">
            <Link className="p-1 nav-link" to="/">Categorias</Link>
            <Link className="p-1 nav-link" to="/">About</Link>
            <Link className="p-1 nav-link" to="/login">Login</Link>
          </div>
        </section>
        <Outlet></Outlet>
      </>
    );
  }else{
    return(
      <>
      <>
        <section className="container header-container">
          <img src={logo} alt="Logo do Blog"></img>
          <input type="text" name="search" placeholder="Buscar artigos,podcasts,destaques..."></input>
          <div className="nav-link-container">
            <Link className="p-1 nav-link" to="/">Categorias</Link>
            <Link className="p-1 nav-link" to="/">About</Link>
            <button className=" nav-button" onClick={ActiveMenuUse}>{userOn.name}</button>
            <div className="nav-menu-user">
              <Link className="nav-link" to="/gerenciarPosts">Gerenciar Posts</Link>
              <a className="nav-link">Logout</a>
            </div>
          </div>
        </section>
        <Outlet></Outlet>
      </>
      </>
    )
  }
};

export default Header;
