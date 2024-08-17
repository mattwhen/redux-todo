import React from 'react';
import Input from '../Input/Input';
import Todos from '../Todos/Todos';

const Container = () => {
  return (
    <div className='overflow-scroll bg-white w-[500px] max-w-[500px] h-[400px] rounded-lg p-4'>
      <Todos />
    </div>
  );
}

export default Container;
