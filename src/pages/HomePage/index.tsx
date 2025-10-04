import HeroSection from "../../widgets/HeroSection/HeroSection";
import NextSection from "../../widgets/NextSection/NextSection";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <NextSection />
    </div>
  );
};

export default HomePage;
