import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Core/Dashboard/Sidebar";
const Dashboard = () => {
  return (
    <>
      <main className="flex min-h-[calc(100vh-3.5rem)] overflow-hidden ">
      <div className="fixed top-0 left-0 ">
      <Sidebar />
        </div>
       
      
        <div className="min-h-[cal(100vh-3.5rem)]  w-full mt-10">
            <div className="text-richblack-50 w-10/12 max-w-[1000px] py-10 mx-auto ">
                <Outlet/>

            </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
