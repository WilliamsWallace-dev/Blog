import Post from "../Post";

const Article = () => {
  return (
    <>
      
      <section className = "container mt-8">
      <h2 className="pl-2">Articles</h2>
      <div className="article-container mx-1">
        <Post subtitulo = "tecnologia" titulo = "O guia definitivo sobre o blog">
        "Post 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </Post>
        <Post subtitulo = "Fotografia" titulo = "Quais as melhores câmeras em 2021">
        "Post 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </Post>
        <Post subtitulo = "Cinema" titulo = "Os 10 filmes com maior bilheteria">
        "Post 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </Post>
        
      </div>
        
      </section>
      
    </>
  );
};

export default Article;
