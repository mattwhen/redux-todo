import React from 'react';
import Input from '../Input/Input';
import Todos from '../Todos/Todos';

const Container = () => {
  return (
    <div className='bg-white w-[600px] h-[500px] rounded-lg p-4'>
      <Todos />
    </div>
  );
}

export default Container;
