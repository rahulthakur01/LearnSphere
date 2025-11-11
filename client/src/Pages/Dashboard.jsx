import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Core/Dashboard/Sidebar";
const Dashboard = () => {
  return (
    <>
      <main className="flex min-h-[cal(100vh-3.5rem)]">
        <Sidebar/>
        <div className="min-h-[cal(100vh-3.5rem)] border border-green-700 w-full ">
            <div className="text-richblack-50 w-10/11 max-w-[1000px] py-10 mx-auto ">
                <Outlet/>

            </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
