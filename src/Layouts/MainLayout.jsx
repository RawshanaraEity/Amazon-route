import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between items-center shadow-md py-7 px-10">
        <div>
          <h1 className="text-5xl font-bold">Amazon</h1>
        </div>
        <nav className="">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </section>

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
