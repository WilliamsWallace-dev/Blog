import {Link, Outlet} from "react-router-dom";

function HeaderForm () {
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

export default HeaderForm;