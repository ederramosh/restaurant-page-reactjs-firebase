import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import metrocentro from "../img/metrocentro.JPG";
import facebook from "../img/fb.svg";
import instagram from "../img/insta.svg";
import twitter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";

const ContactUsPage = () => {
  return (
    <>
      <Header title="Welcome to Li Fong Food" />
      <main className="row">
        <h3 className="text-center my-4">Contactanos</h3>
        <section className="col-lg mb-5">
          <img src={metrocentro} className="img-fluid"  alt="Encuentranos" />
        </section>
        <section className="col-lg mb-5">
          <h5 className="text-center mb-5">Encuentranos en:</h5>
          <div className="row">
            <img src={facebook} className="my-icons col-3" alt="Facebook" />
            <img src={instagram} className="my-icons col-3" alt="Instagram" />
            <img src={twitter} className="my-icons col-3" alt="Twitter" />
            <img src={youtube} className="my-icons col-3" alt="Youtube" />
          </div>
        </section>
        <section className="col-lg mb-5">
          <h5 className="text-center mb-5">Dias y Horarios:</h5>
          <p className="text-center fst-italic mision">
            Lunes a Domingo de 10:00 AM hasta 1:00 AM
          </p>
          <p className="text-center fst-italic mision">
            Tus pedidos al 22577777
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;
