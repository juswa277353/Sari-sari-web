import React from "react";
import { CiCalendar } from "react-icons/ci";
import {
  FaUsers,
  FaMagic,
  FaBullhorn,
  FaComments,
} from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      name: "Event Hosting",
      text: "Launch and manage your events with ease.",
      icon: CiCalendar,
      link: "https://event.sari-sari.com/?fbclid=IwY2xjawMCMCpleHRuA2FlbQIxMABicmlkETF0cTRLb2VFd3ZLRWxTaXRYAR65KxD_gQ_1wHyd7t1O7xCBaDD6Cl4lgwjGPQD5D7_3_B_1wZe7k9Ae_923RQ_aem_5RfUuVtDyUHXDoqCcqFB6A"
    },
    
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>
            We offer a wide range of products tailored 
            to your needs, delivered with excellence and efficiency.
          </p>
        </div>
        <div className="row">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={`${service.name}-${i}`} className="col-md-4">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="service-icon-wrapper">
                    <Icon className="service-icon" />
                  </div>
                  <div className="service-desc">
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
