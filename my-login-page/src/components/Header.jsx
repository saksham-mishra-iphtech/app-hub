import React from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'

const Header = ({heading}) => {
    const navigate=useNavigate();
    const handleback =()=>{
        navigate('/dashboard')

        
    }


  return (
    <div className='flex gap-100 align-center items-center mx-40 my-10'>
       <Button text="Back" isPrimary onclick={handleback}/>
       <div className='font-bold text-4xl' >{heading}</div>
      
    </div>
  )
}

export default Header
