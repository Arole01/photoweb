import About from "./Components/About";
import Approach from "./Components/Approach";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Media from "./Components/Media";
import Passion from "./Components/Passion";
import Service from "./Components/Service";
import "./Styles/Styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Approach/>
      <Passion/>
      <Service/>
      <Media/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
