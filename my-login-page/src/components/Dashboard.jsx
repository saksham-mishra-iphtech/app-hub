import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { useNavigate } from 'react-router-dom';

const cardData = [
  { id: 1, title: 'Counter App', description: '' },
  { id: 2, title: 'Demo Project 2', description: '' },
  { id: 3, title: 'Demo Project 3', description: '' },
  { id: 4, title: 'Demo Project 4', description: '' },
  { id: 5, title: 'Demo Project 5', description: '' },
  { id: 6, title: 'Demo Project 6', description: '' },
];

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout=()=>{
    navigate('/')
  }
  const handleCardClick=()=>{n
    navigate(`/dashboard/${id}`)
  }

  
  return (
    <div className='bg-white text-black w-full min-h-screen flex flex-col items-center relative'>
  <div className="flex justify-end w-full px-5 md:px-11 xs:w-fit h-fit">
    <Button text="Logout" isPrimary onClick={handleLogout} />
  </div>
  <h1 className='text-4xl font-extrabold text-center mt-2'>My Demo Projects</h1>

  <div className='w-full max-w-[90%] sm:max-w-[90%] md:max-w-3xl lg:max-w-6xl xl:max-w-[1350px] min-h-screen mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-16 p-5 sm:p-10 bg-white rounded-lg shadow-lg shadow-black drop-shadow-2xl'>
    {cardData.map((card, index) => (
      <Card key={card.id} id={card.id} index={index} title={card.title} description={card.description} onClick={() => handleCardClick(card.id)} />
    ))}
  </div>
</div>

  );
};

export default Dashboard;
