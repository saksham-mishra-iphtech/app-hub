import React from 'react'
import Header from './Header';
import CounterCard from './CounterCard';

const Demo1 = () => {
    
  return (
    <div>
      <Header heading="Counter App" />
      <div className='flex gap-35  '>
        <div>
        <CounterCard />
        </div>
        <div>
        <CounterCard />
        </div>
      
      
      </div>
    </div>
  )
}

export default Demo1;
