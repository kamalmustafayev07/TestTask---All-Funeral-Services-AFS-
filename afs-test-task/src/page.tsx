import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./components/shared/MainMenu/MainMenu.tsx";
import SideBar from "./components/shared/SideBar/SideBar.tsx";
import "./index.css";
import Company from "./assets/Icons/Company.tsx";


function Home() {
  return (
    <Router>
      <div className="home">
        <MainMenu />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/company" element={<Company/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;

