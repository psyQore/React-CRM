import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alert from "./Alert";

const FormClient = ({ client }) => {
  const navigate = useNavigate();

  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El nombre del cliente es obligatorio"),
    company: Yup.string().required("El nombre de la empresa es obligatorio"),
    email: Yup.string()
      .email("Email no válido")
      .required("El email es obligatorio"),
    phone: Yup.number()
      .integer("Número no válido")
      .positive("Número no válido")
      .typeError("El número no es válido"),
  });

  const handleSubmit = async (values) => {
    try {
      const url = "http://localhost:4000/clients";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      // console.log(response);
      console.log(result);

      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);

          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          // console.log(data);
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Nombre:
                </label>
                <Field
                  id="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  placeholder="Nombre del cliente"
                  name="name"
                />

                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Empresa:
                </label>
                <Field
                  id="company"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  placeholder="Nombre de la empresa"
                  name="company"
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  E-mail:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  placeholder="Email del cliente"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Teléfono:
                </label>
                <Field
                  id="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  placeholder="Teléfono del cliente"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="note">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="note"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100 h-40"
                  placeholder="Notas del cliente"
                  name="notes"
                />
              </div>

              <input
                type="submit"
                value="Agregar Cliente"
                className="mt-5 w-full bg-purple-800 p-3 text-white rounded-md font-bold uppercase text-lg hover:cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormClient;
