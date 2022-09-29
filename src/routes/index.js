import {BrowserRouter,Route} from "react-router-dom";

import Main from "../pages/Main"
import Article from "../pages/Article"

const Routes = ()=>{


  return(
    <>
    <BrowserRouter>

        <Route path="/" component={Main}>
          <Route path="/article/:id" component = {Article}></Route>
        </Route>

    </BrowserRouter>
    </>
  )
}

export default Routes;