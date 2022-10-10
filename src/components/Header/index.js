import logo from "../../svg/logo.svg";
import { Link,Outlet } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../context/blog";

const Header = () => {
  
  //Deletar
  console.log("renderizei Header");
  
  

  //Dados
  const {userOn,posts,search,setSearch,categories} = useContext(BlogContext);
  console.log(categories);
  //Funções
  //Limpar Pesquisa
  const CleanSearch = ()=>{
    setSearch([]);
    document.querySelector(".header-search input").value = "";
  }

  //Pesquisa de Posts
  const SearchPost = (e)=>{
    if(e.keyCode == 13){
      let inputText = document.querySelector(".header-search input").value;
      inputText = inputText.split(" ").filter((e)=>e.length > 2)
      let postsSearch = [];
      inputText.forEach((element,index) => {
        posts.forEach((post)=>{
          if(post.title.split(" ").filter((e) => e.length > 2 && e.toUpperCase() == element.toUpperCase()).length !== 0 )
          postsSearch = [...postsSearch,post];
        })
      })
      setSearch(postsSearch);
    }
  }

  //Ativar Menu do Usuário
  const ActiveMenuUse = (e)=>{
    e.target.nextSibling.classList.toggle("active-nav-menu");
  }
  //return JSX
  if(!userOn || userOn === "Error"){
    return (
      <>
        <section className="container header-container">
          <Link to="/"><img src={logo} alt="Logo do Blog" onClick={CleanSearch}></img></Link>
          <div className="header-search">
            <input type="search" placeholder="Buscar artigos,podcasts,destaques..." onKeyUp={SearchPost} ></input>
          </div>
          <div className="nav-link-container">
          <button className=" nav-button button-user" onClick={ActiveMenuUse}>Categorias</button>
            <div className="nav-menu nav-menu-category">
              {
                categories.map((category,index)=>{
                  return(
                  <>
                    <a key={index} className="nav-element">{category.id}</a>
                  </>
                  )
                })
              }
            </div>
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
          <img className="logo" src={logo} alt="Logo do Blog"></img>
          <div className="header-search">
            <input type="search" name="search" placeholder="Buscar artigos,podcasts,destaques..." onChange = {SearchPost} ></input>
          </div>
          <div className="nav-link-container">
            <button className=" nav-button button-user" onClick={ActiveMenuUse}>Categorias</button>
            <div className="nav-menu nav-menu-category">
              {
                categories.map((category,index)=>{
                  return(
                  <>
                    <a key={index} className="nav-element">{category.id}</a>
                  </>
                  )
                })
              }
            </div>
            <Link className="p-1 nav-link" to="/">About</Link>
            <button className=" nav-button button-user" onClick={ActiveMenuUse}>{userOn.name}</button>
            <div className="nav-menu nav-menu-user">
              <Link className="nav-element" to="/gerenciarPosts">Gerenciar Posts</Link>
              <a className="nav-element">Logout</a>
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
