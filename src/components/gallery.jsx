import { Image } from "./image";
import React from "react";

export const Gallery = () => {
  // Hardcoded gallery data
  const galleryItems = [
    {
      largeImage: "/img/portfolio/01-large.jpg",
      smallImage: "/img/portfolio/01-small.jpg",
      link: "https://event.sari-sari.com/?fbclid=IwY2xjawMCMCpleHRuA2FlbQIxMABicmlkETF0cTRLb2VFd3ZLRWxTaXRYAR65KxD_gQ_1wHyd7t1O7xCBaDD6Cl4lgwjGPQD5D7_3_B_1wZe7k9Ae_923RQ_aem_5RfUuVtDyUHXDoqCcqFB6A",
    },
  ];

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>EXCLUSIVE PROMOTIONS</h2>
          <p>
            Unlock amazing deals and special offers! Don’t miss out—crafted just for you with unbeatable value and creativity.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="portfolio-items flex flex-wrap justify-center gap-4">
            {galleryItems.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="col-sm-6 col-md-4 col-lg-4 flex justify-center"
              >
                <div className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                  <Image
                    title={d.title}
                    smallImage={d.smallImage}
                  />
                  <div className="btn-gallery">
                    <a
                      href={d.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"

                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
