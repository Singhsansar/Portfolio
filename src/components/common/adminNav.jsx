import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <div className=" w-full h-full top-0 left-0 right-0 flex flex-col ">
        <div className=" fixed top-0 left-0 w-full h-20  z-50 bg-slate-950 border-b-[1px] border-gray-900">
          <div className="h-full flex justify-between items-center px-4 md:px-8 lg:mx-10">
            <div className="flex items-center px-4">
              <Link to="/">
                <button className="flex items-center text-white hover:text-designColor">
                  <i className="fi fi-br-home text-xl mr-2"></i>
                  <span className="text-xl font-bold">Home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminNavbar;
