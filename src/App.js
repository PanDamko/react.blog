import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js"
import ContactPage from "./pages/ContactPage.js";
import PostPage from "./pages/PostPage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/blog/:title" element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
