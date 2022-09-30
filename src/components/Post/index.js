import { Link,Outlet } from "react-router-dom";

const Post = (props) => {
  let id = JSON.stringify(props.id)
  return (
    <>
      <section className= "post-container p-1">
        <div className="post-image mb-2"></div>
        <h5>{props.category}</h5>
        <Link to={`/articles/${id}`}><h3>{props.title}</h3></Link>
        <p>{props.children}</p>
        <div className="inf-container mt-3">
          <div className = "post-image-perfil mr-2"></div>
          <div>
            <h6 className = "color-blue-normal">{props.author}</h6>
            <p>{`${props.date} - ${props.time}`}</p>
          </div>
        </div>
      </section>
      <Outlet></Outlet>
    </>
  );
};

export default Post;
