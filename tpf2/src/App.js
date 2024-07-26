import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Parrafo from './Parrafo';
import Header from './Header';
import SectionHero from './SectionHero';
import SectionServices from './SectionServices';
import SectionSkills from './SectionSkills';
import SectionAbout from './SectionAbout';
import SectionHeaderPortfolio from './SectionHeaderPortfolio';
import SectionPortfolio from './SectionPortfolio';
import SectionContact from './SectionContact/SectionContact';
import Footer from './Footer';
function App() {

  const navConfig = [
    "Inicio",
    "Sobre Mi",
    "Habilidades"
  ]

  return (
    <>
    <Head />
    <Header/>
    <div class="logo-box"><h1>G.</h1></div>
    <SectionHero />
    <SectionServices />
    <SectionSkills />
    <SectionAbout />
    <SectionHeaderPortfolio />
    <SectionPortfolio />
    <SectionContact />
    <Footer />
    


    </>
  );
}

export default App;
