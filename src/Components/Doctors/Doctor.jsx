import React from 'react';

const Doctor = ({doctor}) => {
  const {name, img, details} = doctor;
  return (
    <div className="p-7 lg:w-1/3">
      <div className="h-full border-2 px-14 pt-7 pb-7 rounded-2xl overflow-hidden relative">
        <img src={img} className="object-cover w-full h-96 my-3 rounded-xl" alt="" />
        <h1 className="text-3xl font-medium text-cyan-900 mb-3">{name}</h1>

        <p className="leading-relaxed capitalize font-medium  text-lg mb-3">
          {details}
        </p>
      </div>
    </div>
  );
};

export default Doctor;