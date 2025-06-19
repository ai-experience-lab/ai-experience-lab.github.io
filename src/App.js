// import logo from './logo.svg';
import News from "./pages/News/News.jsx";
import About from "./pages/About/About.jsx";
import People from "./pages/People/People.jsx";
import Life from "./pages/Life/Life.jsx";
import Join from "./pages/Join/Join.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Project from "./pages/Project/Project.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Publications from "./pages/Publications/Publications.jsx";

import CommonPage from "./pages/CommonPage/CommonPage.jsx";

// import Join from "./Join.jsx";
// import People from "./People.jsx";
// import Courses from "./Courses.jsx";
// import Projects from "./Projects.jsx";
// import Publications from "./Publications.jsx";

// import Header from "./components/Header.jsx";

// import logo_kaist from "./images/logo-kaist.png";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';


function App() {
  // Deprecated: Using scrollToSection to navigate to sections
  // Uncomment the following function if you want to enable smooth scrolling to sections
  // const scrollToSection = (sectionID) => {
  //   document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
  // }
  
  const [language, setLanguage] = React.useState("en");

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommonPage ContentPage={News} language={language} setLanguage={setLanguage}/>} />
        <Route path="/news" element={<CommonPage ContentPage={News} language={language} setLanguage={setLanguage}/>} />
        <Route path="/about" element={<CommonPage ContentPage={About} language={language} setLanguage={setLanguage}/>} />
        <Route path="/people" element={<CommonPage ContentPage={People} language={language} setLanguage={setLanguage}/>} />
        <Route path="/life" element={<CommonPage ContentPage={Life} language={language} setLanguage={setLanguage}/>} />
        <Route path="/join" element={<CommonPage ContentPage={Join} language={language} setLanguage={setLanguage}/>} /> 
        <Route path="/courses" element={<CommonPage ContentPage={Courses} language={language} setLanguage={setLanguage}/>} />
        <Route path="/projects" element={<CommonPage ContentPage={Projects} language={language} setLanguage={setLanguage}/>} />
        <Route path="/project/:pid" element={<CommonPage ContentPage={Project} language={language} setLanguage={setLanguage}/>} />
        <Route path="/publications" element={<CommonPage ContentPage={Publications} language={language} setLanguage={setLanguage}/>} /> 
        <Route path="/gallery" element={<CommonPage ContentPage={Gallery} language={language} setLanguage={setLanguage}/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
