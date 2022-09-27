import api from "../../services/api"
import { useEffect,useState } from "react";


const Formulario = ()=>{

  console.log("renderizei Form")
  
  let [qtdPosts,setQtdPosts] = useState(0);
  let formulario = [];
  useEffect(()=>{
    api.get('http://localhost:4000/posts')
    .then((response)=>{
      setQtdPosts(response.data.length);
    })
    .catch((error)=>{
      console.log(error);
    })
},[])

  const addPost = ()=>{
        document.querySelectorAll(".formulario-container input").forEach((element,index)=>{
          formulario[index] = element.value
        })
        formulario[formulario.length] = document.querySelector('.formulario-container textarea').value;
        console.log(qtdPosts)
        api.post('/posts', {
        id : `${qtdPosts + 1}`,
        category: `${formulario[1]}`,
        title: `${formulario[0]}`,
        resume: `${formulario[2]}`,
        description: 'Post 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Post 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: 'Fulano de tal',
        date: 'Aug 2, 2020',
        ime: '8 min read'
        })
        .then(function (response) {
          console.log(response);
          setQtdPosts(qtdPosts + 1);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <>
    <h1>Formulario</h1>
    <section className="formulario-container">
    <input type="text" placeholder="Titulo"></input>
    <input type="text" placeholder="Subtitulo"></input>
    <textarea rows="4" cols="50" placeholder="Resume"></textarea>
    <button className="formulario-butao" type="button" onClick={addPost} >Enviar</button>
    </section>
    </>
  )
}

export default Formulario;