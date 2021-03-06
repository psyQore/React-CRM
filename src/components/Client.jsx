import { useNavigate, Link } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate();

  const { name, company, phone, email, notes, id } = client;

  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="p-3">{id}</td>
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>{" "}
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel:</span>{" "}
          {phone}
        </p>
      </td>
      <td className="p-3">{company}</td>
      <td className="p-3">
        <button
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs"
          type="button"
          onClick={() => navigate(`/clients/${id}`)}
        >
          Ver
        </button>
        <button
          className="bg-purple-600 hover:bg-violet-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          type="button"
          onClick={() => navigate(`/clients/edit/${id}`)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          type="button"
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
