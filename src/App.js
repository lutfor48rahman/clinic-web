import { Route, Routes } from "react-router-dom";
import AboutSection from "./component/AboutPage/AboutSection";
import Flyers from "./component/Gallery/Flyers";
import GallerySection from "./component/Gallery/GallerySection";
import PaitaintGallery from "./component/Gallery/PaitaintGallery";
import WorkPlace from "./component/Gallery/WorkPlace";
import HomeSections from "./component/HomePages/HomeSections";
import Navbar from "./component/Navbar/Navbar";
import ServiceSection from "./component/ServicePage/ServiceSection";
import TeamSection from "./component/TeamPage.js/TeamSection";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeSections></HomeSections>}></Route>
        <Route path="/about" element={<AboutSection></AboutSection>}></Route>
        <Route path="/team" element={<TeamSection></TeamSection>}></Route>
        <Route path="/service" element={<ServiceSection></ServiceSection>}></Route>
        <Route path="/gallery" element={<GallerySection></GallerySection>}></Route>
        <Route path="/work-place" element={<WorkPlace></WorkPlace>}></Route>
        <Route path="/paitaint-gallery" element={<PaitaintGallery></PaitaintGallery>}></Route>
        <Route path="/flyer" element={<Flyers></Flyers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
