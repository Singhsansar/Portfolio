import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import ProjectDetails from "./page/ProjectDetails";
import AdminAuth from "./page/adminAuth";
import ChangePassword from "./page/change-password.page";
import SideNav from "./components/navbar/SideNav";
import Navbar from "./components/navbar/Navbar";
import AdminNavbar from "./components/common/adminNav";
import Personaldetails from "./components/admin/personaldetails";
import EditFeatures from "./components/admin/features";
import EditProjects from "./components/admin/editprojects";
import EditEducation from "./components/admin/education";
import EditSKills from "./components/admin/editSkills";
import Edithobby from "./components/admin/hobbies";
import Editpublications from "./components/admin/publication";
import Contact from "./components/admin/contact";
import Editachievements from "./components/admin/achievement";
import Editexpriences from "./components/admin/exprience";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="project/:id" element={<ProjectDetails />} />
        </Route>
        <Route path="/admin" element={<AdminNavbar />}>
          <Route index element={<AdminAuth />} />
          <Route path="dashboard" element={<SideNav />}>
            <Route path="personal-details" element={<Personaldetails />} />
            <Route path="skills" element={<EditSKills />} />
            <Route path="projects" element={<EditProjects />} />
            <Route path="features" element={<EditFeatures />} />
            <Route path="education" element={<EditEducation />} />
            <Route path="hobbies" element={<Edithobby />} />
            <Route path="publications" element={<Editpublications />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="achievements" element={<Editachievements />} />
            <Route path="experience" element={<Editexpriences />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
