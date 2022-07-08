import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";

const FormnewClients = () => {
  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El Nombre del Cliente es Obligatorio"),
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (values) => {
    console.log(values);
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
        onSubmit={(values) => handleSubmit(values)}
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
                className="mt-5 w-full bg-blue-800 p-3 text-white rounded-md font-bold uppercase text-lg hover:cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormnewClients;
