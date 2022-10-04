import api from "../../services/api"
import {useState,useEffect,useContext} from "react"
import { BlogContext } from "../../context/blog"

import Main from "../../pages/Main"


function FormLogin (){

  console.log("renderiza FormLogin")
  

  const {users,userOn,setUserOn} = useContext(BlogContext);
  let inputs = [];

  const VerificaUsuario = () => {
    document.querySelectorAll(".formLogin-container input").forEach((element,index)=>{
      inputs[index] = element.value;

    })
    users.forEach((element,index,users)=>{
      if(element.username === inputs[0] && element.password === inputs[1]){
        setUserOn(element);
        console.log(userOn)
      }else if(index === (users.length-1) && !userOn){
        setUserOn("Error");
      }
    })
  }

  if(userOn === "Error"){
    return (<>
      <section className="formLogin-container">
        <h3>Login</h3>
        <p>usuario e senha não conferem</p>
        <label >Username</label>
        <input type = "text" placeholder = "Username" style={{color:"black"}}></input>
        <label>Password</label>
        <input type = "password" placeholder = "Password" style={{color:"black"}}></input>
        <button type = "button" onClick = {VerificaUsuario}>Login</button>
      </section>
      </>)
    }else if(!userOn){
            return(
                <>
                <section className="formLogin-container">
                  <h3>Login</h3>
                  <label >Username</label>
                  <input type = "text" placeholder = "Username" style={{color:"black"}}></input>
                  <label>Password</label>
                  <input type = "password" placeholder = "Password" style={{color:"black"}}></input>
                  <button type = "button" onClick = {VerificaUsuario}>Login</button>
                </section>
                </>
                )
          }else{
            return(
            <>
            <Main>
            </Main>
            </>
          )
  }
  
}

export default FormLogin;