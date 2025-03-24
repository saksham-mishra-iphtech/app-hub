import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

const cardData = [
  { id: 1, title: "Counter App" },
  { id: 2, title: "TODO List" },
  { id: 3, title: "Movie Search App" },
  { id: 4, title: "E-shopping Cart App" },
  { id: 5, title: "Demo Project 5" },
  { id: 6, title: "Demo Project 6" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const handleCardClick = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <div className="bg-white text-black w-full h-screen flex flex-col items-center overflow-hidden no-scrollbar xl:w-full ">
      <div className="flex justify-end w-full mt-1 px-5 md:px-11 xs:w-fit h-fit">
        <button
          className="flex text-center items-center font-bold text-2xl mt-2 text-blue-900"
          onClick={handleLogout}
        >
          <div>
            <IoIosArrowBack />
          </div>
          <div className="font-semibold text-xl">Logout</div>
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-center mt-2">
        My Demo Projects
      </h1>

      <div className="w-full max-w-[1350px] mt-5 p-5 sm:p-10 bg-white overflow-y-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-16 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <div key={card.id} className="aspect-square">
              <Card
                id={card.id}
                index={index}
                title={card.title}
                onclick={() => handleCardClick(card.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
