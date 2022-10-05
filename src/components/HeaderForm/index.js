import {Link, Outlet} from "react-router-dom";

function HeaderForm () {
  return(
  <>
  <section>
    <Link className="p-2" to="/gerenciarPosts">Adicionar Artigo</Link>
    <Link className="p-2" to="/gerenciarPosts/editePost">Editar Artigo</Link>
    <Link className="p-2" to="/gerenciarPosts/removePost">Remover Artigo</Link>
    <Outlet></Outlet>
  </section>
  </>
  
  )
}

export default HeaderForm;