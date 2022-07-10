import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewCLient = () => {
  const { id } = useParams();

  const [client, setClient] = useState({});

  useEffect(() => {
    const getClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
    };
    getClientAPI();
  }, []);

  return (
    <section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
              <img src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h1 className="text-black text-2xl title-font font-bold mb-2">
                {client.name}
              </h1>
              <p className="leading-relaxed text-base">
              <div className="md:flex font-bold text-gray-800 pb-4">
                <div className="w-full md:w-1/2 flex space-x-3">
                  <div className="w-1/2">
                    <h2 className="text-gray-500">Empresa</h2>
                    <p>{client.company}</p>
                  </div>
                </div>
              </div>
              </p>
              <div className="md:flex font-bold text-gray-800">
                <div className="w-full md:w-1/2 flex space-x-3">
                  <div className="w-1/2">
                    <h2 className="text-gray-500">Telefono</h2>
                    <p>{client.phone}</p>
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-gray-500">Email</h2>
                    <p>{client.email}</p>
                  </div>
                </div>
              </div>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Notas
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <p className="leading-relaxed text-base">
                {client.notes}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViewCLient;
