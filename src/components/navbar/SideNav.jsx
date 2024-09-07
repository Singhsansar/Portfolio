import { useState, useRef, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  let page = location.pathname.split("/")[3] || "dashboard";
  const [pageState, setPageState] = useState(page.replace("-", " "));
  const [showSideNav, setShowSideNav] = useState(false);
  const activeTabLine = useRef(null);
  const sideBarIconTab = useRef(null);
  const pageStateTab = useRef(null);

  useEffect(() => {
    setShowSideNav(false);
    pageStateTab.current?.click();
  }, [pageState]);

  const changePageState = (e) => {
    if (e.target === sideBarIconTab.current) {
      setShowSideNav(!showSideNav);
    } else {
      setPageState(e.target.innerText.toLowerCase());
      setShowSideNav(false);
    }
    const { offsetWidth, offsetLeft } = e.target;
    if (activeTabLine.current) {
      activeTabLine.current.style.width = `${offsetWidth}px`;
      activeTabLine.current.style.left = `${offsetLeft}px`;
    }
  };

  const handleMenu = () => {
    console.log(pageState);
    setShowSideNav(!showSideNav);
  };

  const navLinkStyles = ({ isActive }) =>
    `block px-4 py-2 rounded-md text-left ${
      isActive
        ? "bg-black text-white"
        : "bg-slate-900 text-white hover:bg-gray-700"
    }`;

  return (
    <section className="fixed  -z-2 mt-20 w-full h-full flex flex-col md:flex-row bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="md:hidden top-0 z-40 bg-slate-900 text-white">
        <div className="flex items-center p-2 border-b border-gray-700">
          <button ref={sideBarIconTab} className="p-2" onClick={handleMenu}>
            <i className="fi fi-rr-bars-staggered "></i>
          </button>
          <button
            ref={pageStateTab}
            className="flex-1 text-center capitalize text-white"
            onClick={changePageState}
          >
            {pageState}
          </button>
          <hr
            ref={activeTabLine}
            className="absolute bottom-0 left-0 bg-black transition-all"
          />
        </div>

        {/* Mobile side menu */}
        <div
          className={`fixed max-w-[80%] mt-14 inset-0 top-[80px] left-0 bg-slate-900 z-30 p-6 overflow-y-auto transform ${
            showSideNav
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <h1 className="text-lg font-medium mb-4 text-white">Dashboard</h1>
          <hr className="border-gray-700 mb-6" />
          <div className="flex flex-col justify-start">
            <NavLink
              to="/admin/dashboard/personal-details"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Personal Details
            </NavLink>
            <NavLink
              to="/admin/dashboard/features"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Features
            </NavLink>
            <NavLink
              to="/admin/dashboard/projects"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Projects
            </NavLink>
            <NavLink
              to="/admin/dashboard/skills"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Skills
            </NavLink>
            <NavLink
              to="/admin/dashboard/education"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Education
            </NavLink>
            <NavLink
              to="/admin/dashboard/experience"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Experience
            </NavLink>
            <NavLink
              to="/admin/dashboard/achievements"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Achievements
            </NavLink>
            <NavLink
              to="/admin/dashboard/publications"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Publications
            </NavLink>
            <NavLink
              to="/admin/dashboard/hobbies"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Hobbies
            </NavLink>
            <NavLink
              to="/admin/dashboard/contacts"
              onClick={changePageState}
              className={navLinkStyles}
            >
              Contacts
            </NavLink>
          </div>
          <h1 className="text-xl mt-6 text-gray-300 mb-3">Settings</h1>
          <hr className="border-gray-700 mb-6" />
          <div className="flex flex-col gap-4">
            <NavLink
              to="/admin/dashboard/change-password"
              onClick={changePageState}
              className={navLinkStyles}
            >
              <i className="fi fi-rr-lock"></i> Change Password
            </NavLink>
          </div>
        </div>
      </div>

      {/* Sidebar for larger screens */}
      <div
        className={`hidden md:block w-60 bg-slate-900 h-full sticky top-0 z-20 p-6 overflow-y-auto ${
          showSideNav ? "block" : "hidden"
        }`}
      >
        <h1 className="text-lg font-medium mb-4 text-white">Dashboard</h1>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col gap-2">
          <NavLink
            to="/admin/dashboard/personal-details"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Personal Details
          </NavLink>
          <NavLink
            to="/admin/dashboard/features"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Features
          </NavLink>
          <NavLink
            to="/admin/dashboard/projects"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Projects
          </NavLink>
          <NavLink
            to="/admin/dashboard/skills"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Skills
          </NavLink>
          <NavLink
            to="/admin/dashboard/education"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Education
          </NavLink>
          <NavLink
            to="/admin/dashboard/experience"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Experience
          </NavLink>
          <NavLink
            to="/admin/dashboard/achievements"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Achievements
          </NavLink>
          <NavLink
            to="/admin/dashboard/publications"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Publications
          </NavLink>
          <NavLink
            to="/admin/dashboard/hobbies"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Hobbies
          </NavLink>
          <NavLink
            to="/admin/dashboard/contacts"
            onClick={changePageState}
            className={navLinkStyles}
          >
            Contacts
          </NavLink>
        </div>
        <h1 className="text-xl mt-6 text-gray-300 mb-3">Settings</h1>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col gap-4">
          <NavLink
            to="/admin/dashboard/change-password"
            onClick={changePageState}
            className={navLinkStyles}
          >
            <i className="fi fi-rr-lock"></i> Change Password
          </NavLink>
        </div>
      </div>

      {/* Main content section */}
      <div className="flex-1 max-md:mt-0 max-md:pt-2 sm:top-0 h-full overflow-y-scroll">
        <Outlet />
      </div>
    </section>
  );
};

export default SideNav;
