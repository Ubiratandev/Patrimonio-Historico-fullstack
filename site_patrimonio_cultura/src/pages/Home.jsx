import Header from "../components/header/Header";
import Categorias from "../components/categorias/Categorias";
import Footer from "../components/footer/Footer";
import "./../App.css";

const Home = () => {
  return (
    <div className="home_css">
      
      <Header render_abertos={true} />
      <Categorias />
      <Footer />
    </div>
  );
};

export default Home;
