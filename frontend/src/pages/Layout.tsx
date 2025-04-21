import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Navbar />
      <main className="px-6 xl:px-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
