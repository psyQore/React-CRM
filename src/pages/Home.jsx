import { useEffect, useState } from "react"

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = "http://localhost:4000/clients";

        const response = await fetch(url);
        const result = await response.json();

        setClients(result)
      } catch (error) {
        console.log(error);
      }

    }
    getClientsAPI();
  }, []);

  return (
    <div>
      <h1>Inicio</h1>
    </div>
  )
}

export default Home