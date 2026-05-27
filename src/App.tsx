import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import Organizations from "./pages/Organizations";
import MediaKit from "./pages/MediaKit";
import Hobbies from "./pages/Hobbies";
import Characters from "./pages/Hobbies/Characters";
import CharacterDetail from "./pages/Hobbies/CharacterDetail";
import Comics from "./pages/Hobbies/Comics";
import ComicReader from "./pages/Hobbies/ComicReader";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MediaModalProvider } from "./contexts/MediaModalContext";

export default function App() {
  return (
    <ThemeProvider>
      <MediaModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Comic Reader — full-screen, no sidebar/navbar */}
            <Route path="/hobbies/comics/:id" element={<ComicReader />} />

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="products" element={<Products />} />
              <Route path="media-kit" element={<MediaKit />} />
              <Route path="experience" element={<Experience />} />
              <Route path="projects" element={<Projects />} />
              <Route path="certifications" element={<Certifications />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="organizations" element={<Organizations />} />
              <Route path="hobbies">
                <Route index element={<Hobbies />} />
                <Route path="comics" element={<Comics />} />
                <Route path="characters" element={<Characters />} />
                <Route path="characters/:id" element={<CharacterDetail />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MediaModalProvider>
    </ThemeProvider>
  );
}
