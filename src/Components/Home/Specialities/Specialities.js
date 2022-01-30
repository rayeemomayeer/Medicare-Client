import React from 'react';
import aids from './aids.png';
import allergy from './allergy.png';
import dentisty from './dentisty.png';
import dermatology from './dermatology.png';
import gastroenterology from './gastroenterology.png';
import infectous from './infectous.png';
import medicine2 from './medicine (1).png';
import medicine from './medicine.png';
import neurology from './neurology.png';
import otolaryngology from './otolaryngologist.png';
import paediatrics from './paediatrics.png';
import urology from './urology.png';


const Specialities = () => {
  return (
    <div>
      <section
        className="text-gray-600 body-font"
        style={{ backgroundColor: "#FFF9F5" }}
      >
        <div className="container px-5 pt-12 pb-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className=" mb-5 sm:text-3xl md:text-5xl font-medium text-gray-900">
              Our cosulting specialities
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              ask a doctor online and get quick medical advice for your health
              queries. our medical panel consists of over 3500+ doctors from 80+
              specialities.
            </p>
          </div>

          <div className="flex flex-wrap space-y-4">
            <div
              className="xl:w-1/6 md:w-1/2 mr-5"
              style={{ backgroundColor: "#FDEADB" }}
            >
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={dermatology} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  dermatology
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={medicine} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  Internal medicine
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={neurology} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  neurology
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={medicine2} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  General medicine
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={dentisty} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  dentisty
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={otolaryngology} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  otolaryngology
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={aids} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  HIV/AIDS
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={urology} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  urology
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={allergy} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  allergy
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={paediatrics} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  paediatrics
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={gastroenterology} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  gastroenterology
                </h2>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-1/2 mr-5 bg-white">
              <div className="shadow-base items-center p-6 rounded-2xl">
                <div className="inline-flex justify-center h-12 w-full mx-auto rounded-full mb-4">
                  <img src={infectous} className="" alt="" />
                </div>
                <h2 className="text-lg capitalize text-gray-900 font-medium text-center mb-2">
                  infectous Disease
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialities;