import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const localtion = useLocation();

  const currentUrl = localtion.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM Cliuentes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              currentUrl === "/clients" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/clients"
          >
            Clientes
          </Link>
          <Link
            className={`${
              currentUrl === "/clients/new" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/clients/new"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
