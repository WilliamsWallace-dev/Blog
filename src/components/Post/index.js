const Post = (props) => {
  return (
    <>
      <section className= "post-container p-1">
        <div className="post-image mb-2"></div>
        <h5>{props.subtitulo}</h5>
        <h3>{props.titulo}</h3>
        <p>{props.children}</p>
        <div className="inf-container mt-3">
          <div className = "post-image-perfil mr-2"></div>
          <div>
            <h6 className = "color-blue-normal">{props.autor}</h6>
            <p>{`${props.date} - ${props.timeReading}`}</p>
          </div>
        </div>

      </section>
    </>
  );
};

export default Post;
