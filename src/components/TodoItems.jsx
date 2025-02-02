import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import del from '../assets/del.png' 

const TodoItems = ({text, id, isComplete, todoDelete, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2 ' >

      <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer  '>
        <img src={isComplete ? tick: not_tick} alt="tick" className='w-7 ' />
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete? "line-through": "" }`}>{text}</p>
      </div>

        <img src={del} alt="delete icon" className='w-3.5 cursor-pointer' onClick={() => {todoDelete(id)}} />
    </div>
  )
}

export default TodoItems
