import React from 'react';
import Doctor from './Doctor';
const doctors = [
  {
    id: 1,
    name: "Dr.Brian Adam",
    details: "Restorative Dentist",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    name: "Dr. Abby Broeckel",
    details: "Restorative Dentist",
    img: "https://images.unsplash.com/photo-1584467735815-f778f274e296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    name: "Dr. Baylee Kempter",
    details: "Restorative Dentist",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: 4,
    name: "Dr. Dustin Paviolitis",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/564x/00/c6/3a/00c63ac73002fccc11a9086d3255aa6a.jpg",
  },
  {
    id: 5,
    name: "Dr. Caden Cloney",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/564x/f5/cf/89/f5cf89ffc4ef31f7cedba3fcdc9f79c1.jpg",
  },
  {
    id: 6,
    name: "Dr. Fern Hillmer",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/736x/1f/e4/b2/1fe4b22873d29a7babb1f7e5b52efed2.jpg",
  },
  {
    id: 7,
    name: "Dr. Maria Johengen",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/564x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg",
  },
  {
    id: 8,
    name: "Dr. Norma Maggie",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/736x/7e/10/42/7e104205e381cf6dc64231eda76c01ae.jpg",
  },
  {
    id: 9,
    name: "Dr. Louis Roddick",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/564x/6d/6f/12/6d6f129f0d414f956d0e3b7f3130ad3f.jpg",
  },
  {
    id: 10,
    name: "Dr. Savannah Schnorr",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/564x/88/aa/92/88aa92f0bee24c6dd651b8882c2d6ac8.jpg",
  },
  {
    id: 11,
    name: "Dr. Nellie Zundel",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/564x/e6/45/f3/e645f339502edb2d4ab678e4adbf0df8.jpg",
  },
  {
    id: 12,
    name: "Dr. Hadley Scheidler",
    details: "Restorative Dentist",
    img: "https://i.pinimg.com/564x/b9/f7/cb/b9f7cbde7eae647cb5eeadb5d8f2df57.jpg",
  },
];
const Doctors = () => {
  return (
    <div className="pt-24">
      <h1 className="text-center text-5xl text-cyan-900 font-bold rounded-xl">
        Meet Our Experts Doctors
      </h1>
      <p className="text-center text-gray-500 text-lg pt-6">Replenish him third creature and meat most of the blessed<br/> void a fruit gathered.</p>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-8 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;