import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FormClient from "../components/FormClient";

const EditClient = () => {
  const { id } = useParams();

  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
    const getClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    getClientAPI();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-violet-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar datos de un cliente
      </p>

      <FormClient client={client} />
    </>
  )
}

export default EditClient