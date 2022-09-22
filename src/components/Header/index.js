import logo from "../../svg/logo.svg";

const Header = () => {
  return (
    <>
      <section className="container header-container">
        <img src={logo} alt="Logo do Blog"></img>
        <input type="text" name="search" placeHolder="Buscar artigos,podcasts,destaques..."></input>
        <div className="nav-link ">
          <a className = "p-1" src="#">Categories</a>
          <a className = "p-1" src="#">About</a>
          <a className = "p-1" src="#">Contact</a>
        </div>
      </section>
    </>
  );
};

export default Header;
