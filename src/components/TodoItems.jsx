import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import del from '../assets/del.png' 

const TodoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2 ' >

      <div className='flex flex-1 items-center cursor-pointer  '>
        <img src={tick} alt="tick" className='w-7 ' />
        <p className='text-slate-700 ml-4 text-[17px] '>{text}</p>
      </div>

        <img src={del} alt="delete icon" className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default TodoItems