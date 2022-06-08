import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LogIn from "./layout/LogIn";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*Grupo de rutas anidadas*/}

          <Route path="/" element={<LogIn />}>
            <Route index element={<LoginForm />} />
          </Route>

          <Route path="/clients" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
