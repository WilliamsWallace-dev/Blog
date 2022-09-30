

function Article ({id,category,title,resume,description,author,date,time}){
  return(
    <>
      <section className="container-article container">
        <div className="div-img">
          {/* <img className="article-img" src="#"></img> */}
          </div>
        <h5>{category}</h5>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="inf-container mt-3">
            <h6 className = "color-blue-normal">{author}</h6>
            <p>{`${date} - ${time}`}</p>
        </div>
      </section>
    </>
  )
}

export default Article;