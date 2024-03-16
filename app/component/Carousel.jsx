"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ children, emblaRef }) => {
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-4">{children}</div>
      </div>
    </section>
  );
};

export default Carousel;
