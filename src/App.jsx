import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import ViewCLient from "./pages/ViewClient";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/clients" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="new" element={<NewClient />} />
            <Route path="edit/:id" element={<EditClient />} />
            <Route path=":id" element={<ViewCLient />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
