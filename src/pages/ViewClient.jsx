import { useParams } from "react-router-dom";

const ViewCLient = () => {
  const {id} = useParams();

  console.log(id);
  return (
    <div>
      <h1>Ver Cliente</h1>
    </div>
  );
};

export default ViewCLient;
