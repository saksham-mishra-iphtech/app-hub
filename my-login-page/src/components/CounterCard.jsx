import React from 'react'
import { Button } from './Button';
import { InputField } from './InputField';

const CounterCard = () => {
  return (
    <div className='h-fit w-fit border m-25'>
        <h2>name</h2>
        <div className="flex flex-col items-center gap-4 p-4 w-full">
          <div className="flex gap-4 w-full justify-center">
           <Button text="+"  />
           <InputField  />
           <Button text="-"  />
          </div>
          <div className="grid place-items-center w-full">
           <Button text="reset" />
          </div>
        </div>
        

      
    </div>
  )
}
export default CounterCard;
