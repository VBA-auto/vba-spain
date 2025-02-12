"use client";

import Head from "next/head";
import { useState } from "react";

const pageDescription =
  "Contactez-nous via cette page, en laissant vos coordonnées et indiquez votre type de véhicule Renault ";

const ContactSpain = () => {
  const [isError, setIsError] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
    category: "Renault Captur", // Ajout de la catégorie
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si c'est le menu déroulant, mettez à jour la valeur dans l'objet formData
    if (name === "category") {
      setFormData((prevData) => ({ ...prevData, category: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone || !isPhoneNumberValid(formData.phone)) {
      setIsTel(true);
      return;
    }

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <main id="contact" className="">
      <section className=" pt-[30px] pb-20 md:px-0 px-5">
        <div className="relative">
          <div className="flex flex-col items-center ">
            <Head>
              <title>contacter nous VBA calcualteur Renault</title>
              <meta name="description" content={pageDescription} />
            </Head>
            <div className="container mx-auto mb-8">
              <div className="product border accent_color py-4 text-center rounded-md">
                <h1 className="headingText font-semibold  my-1 text-[#374151]">
                  Contáctenos
                </h1>
                <p className="font-semibold mt-2 text-[#374151]">
                  Estamos aquí.
                </p>
              </div>
            </div>

            <div className="contactForm md:w-[846px]">
              <form
                onSubmit={handleSubmit}
                className="w-full z-20 shadow-xl accent_color p-4 rounded-md"
              >
                {/* <h1 className="text-2xl text-center text-[#090909]s font-bold mb-4">
                Contactez-nous
              </h1> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nom et Prénom */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Nombre / Apellido*
                    </label>
                    <input
                      placeholder="Nombre Apellido"
                      type="text"
                      id="name"
                      name="name"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Adresse Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Correo electrónico*
                    </label>
                    <input
                      placeholder="adresse@mail.com"
                      type="email"
                      id="email"
                      name="email"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Teléfono*
                    </label>
                    <input
                      placeholder="0123456789"
                      type="tel"
                      id="phone"
                      name="phone"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Catégories (Menu déroulant) */}
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Asunto de la consulta*
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="forminputFields bg-white"
                      required
                      onChange={handleChange} // Ajout de la gestion du changement
                    >
                      {/* Remplacez les options par vos propres catégories */}
                      <option value="Renault Captur">Renault Captur</option>
                      <option value="Renault Megane">Renault Megane</option>
                      <option value="Renault Clio IV">Renault Clio IV</option>
                      <option value="Renault Scenic">Renault Scenic</option>
                      <option value="Renault Fluence">Renault Fluence</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Mensaje*
                  </label>
                  <textarea
                    placeholder="Por favor, especifique el motivo de su consulta. Nos comprometemos a responderle en un plazo de 24 horas."
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="forminputFields bg-white"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <p className="text-red-500">
                  {isTel
                    ? "Erreur lors de l'envoi du formulaire, vérifier votre numéro de téléphone"
                    : ""}
                </p>
                <p className="text-red-500">
                  {isError ? "Erreur lors de l'envoi du formulaire" : ""}
                </p>
                <p className="text-green-500">
                  {isOk ? "Formulaire envoyé avec succès" : ""}
                </p>

                {/* Bouton Envoyer */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-12 rounded-md hover:bg-[#2C80EF] hover:text-white block mx-auto"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactSpain;
