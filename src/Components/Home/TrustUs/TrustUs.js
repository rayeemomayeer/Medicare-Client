import React from 'react';
import chat from './speak.png';
import secure from './lock.png';
import specialist from './doctor.png';
import customers from './testimonials.png';

const TrustUs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl md:text-5xl font-medium text-gray-900 mb-4">
              Why you should trust us?
              <br /> Get know about us
            </h1>
          </div>
          <div className="flex  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={specialist} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl font-bold mb-3">
                  All Specialist
                </h2>
                <p className="leading-relaxed text-lg">
                  You can reach out to 3500+ doctors from 80+ specialties, who
                  are experienced in telemedicine.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={secure} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl font-bold mb-3">
                  Private & Secure
                </h2>
                <p className="leading-relaxed text-lg">
                  All your data is protected and safe gurded with sucresd ssl.
                  data at rest encryption.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={customers} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl font-bold mb-3">
                  Million Customers
                </h2>
                <p className="leading-relaxed text-lg">
                  Trusted by millions and serving users worldwide. Users from
                  196 countries and counting.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={chat} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl font-bold mb-3">
                  Chatbot Support
                </h2>
                <p className="leading-relaxed  text-lg">
                  Get a access to Docta via chat bots for a fantastic telehealth
                  service.Contact via telegram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustUs;