import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
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
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 flex justify-center"
                  >
                    <div className="relative group">
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
