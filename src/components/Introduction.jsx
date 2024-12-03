import React from "react";
import cv from "../assets/cv.jpg";

function Introduction() {
  return (
    <>
      <div className="container mx-auto md:px-28 sm:px-auto  py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={cv}
              alt="Siluni"
              className="h-60 w-60 md:h-80 md:w-80 rounded-full "
            />
          </div>

          {/* Text Section */}
          <div className="text-left">
            <div className="text-lg text-gray-600">HI THERE,</div>
            <h2 className="text-3xl md:text-4xl text-yellow-300 font-bold ">
              I'm Siluni Rupasinghe
            </h2>
            <p className="mt-4 text-lg leading-relaxed px-3">
              I'm a passionate and driven Software Engineering undergraduate. I
              specialize in Web Development, Android Mobile Development, and have
              a strong background in MERN Stack, Java, Python, etc. I'm
              passionate about writing clean, efficient, and scalable code. I
              thrive as a quick learner and team player with a keen eye for
              detail. I'm excited to continue growing my skills and making an
              impact in the industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
