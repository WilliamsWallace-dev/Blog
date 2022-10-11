import logo from "../../svg/logo.svg";
import { Link,Outlet } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../context/blog";

const Header = () => {
  
  //Deletar
  console.log("renderizei Header");
  
  

  //Dados
  const {userOn,setUserOn,posts,search,setSearch,categories} = useContext(BlogContext);
  //Funções
  //Limpar Pesquisa
  const CleanSearch = ()=>{
    setSearch("");
    document.querySelector(".header-search input").value = "";
  }

  //Pesquisa de Posts
  const SearchPost = (e)=>{
    console.log(e.target)

    let postsSearch = [];

    if(e._reactName === "onKeyUp" && e.keyCode == 13){
      let inputText = document.querySelector(".header-search input").value;
      inputText = inputText.split(" ").filter((e)=>e.length > 2)
      inputText.forEach((element,index) => {
        posts.forEach((post)=>{
        if(post.title.split(" ").filter((e) => e.length > 2 && e.toUpperCase() == element.toUpperCase()).length !== 0 )
          postsSearch = [...postsSearch,post];
        })
      })
      setSearch(postsSearch);
    }else if(e._reactName === "onClick"){
            let category = e.target.innerHTML;
            posts.forEach((post)=>{
              if(post.category.toUpperCase() === category)
                postsSearch = [...postsSearch,post];
            })
            console.log(postsSearch)
            setSearch(postsSearch);
          }
  }

  //Ativar Menu do Usuário
  const ActiveMenuUse = (e)=>{
    let menu = e.target.nextSibling;
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
      menu.style.maxHeight = menu.scrollHeight + "px";
    }else{
      menu.style.maxHeight = 0 + "px";
    }

  }

  //Logout
  const logout = ()=>{
    setUserOn("");
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
          <button className=" nav-button button-user" onClick={ActiveMenuUse} onBlur={ActiveMenuUse}>Categorias</button>
            <div className="nav-menu nav-menu-category">
              {
                categories.map((category,index)=>{
                  return(
                  <>
                    <Link to="/" key={index} className="nav-element" onClick={SearchPost}>{category.id}</Link>
                  </>
                  )
                })
              }
            </div>
            {/* <Link className="p-1 nav-link" to="/">About</Link> */}
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
          <Link to="/"><img src={logo} alt="Logo do Blog" onClick={CleanSearch}></img></Link>
          <div className="header-search">
            <input type="search" placeholder="Buscar artigos,podcasts,destaques..." onKeyUp={SearchPost} ></input>
          </div>

          <div className="nav-link-container">
            <button className=" nav-button button-user" onClick={ActiveMenuUse} onBlur={ActiveMenuUse}>Categorias</button>
            <div className="nav-menu nav-menu-category">
              {
                categories.map((category,index)=>{
                  return(
                  <>
                    <Link to="/" key={index} className="nav-element" onClick={SearchPost}>{category.id}</Link>
                  </>
                  )
                })
              }
            </div>

            {/* <Link className="p-1 nav-link" to="/">About</Link> */}

            <button className=" nav-button button-user" onClick={ActiveMenuUse} onBlur={ActiveMenuUse}>{userOn.name}</button>
            <div className="nav-menu nav-menu-user">
              <Link className="nav-element" to="/gerenciarPosts">Gerenciar Posts</Link>
              <a className="nav-element" onClick = {logout}>Logout</a>
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
