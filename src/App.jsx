import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <ContactUs />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
