import React from "react";
import img from "../images/banner2.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import Heading from "../common/Heading";
import Services1 from "./Services1";


const Services = () => {

  return (
    <>
      <section className="services mb">
        <Back name="" title="Perform tests" cover={img} />
        <div className="featured container10">
          <Heading
            title="Check your symptoms"
            subtitle="Symptoms are early indicators of the diseases in humans"
          />
          <section className="contact mb">
            <div className="container1">
              <Services1 />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Services;
