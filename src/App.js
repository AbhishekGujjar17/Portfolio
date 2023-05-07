import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route , Navigate} from "react-router-dom";
import About from "./components/about/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import Depreciated from "./components/Depreciated/Depreciated";

function App() {
  return (
    <div className="app">
      <div className="container app__container">
          <Depreciated />
        <div className="row app__row">
         
            <div className="col-lg-3">
              <Sidebar />


            </div>

            <div className="col-lg-9 app__main-content">

            <Navbar />
            <AnimatePresence exitBeforeEnter>
            <Routes>
              
                    <Route exact path="/about" element={<About  />}/>
                    <Route exact path="/resume" element={<Resume />}/>
                    <Route exact path="/projects" element={<Projects  />}/>
                    <Route exact path="/" element={<Navigate exact to = "/about"/>}/>
                    <Route exact path="*" element={<Navigate exact to = "/about"/>}/>
                  
                
                 
                
              
            </Routes>
            </AnimatePresence>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
