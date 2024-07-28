import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
import { useRef } from 'react'

const Todo = () => {

  const inputRef = useRef()

  const add = () => {
    const inoutText = inputRef.current.value;
    console.log(inoutText);
  }

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl '>
      {/* ----------title---------- */}
      <div className='flex items-center mt-7 gap-2 '>
        <img src={todo_icon} alt='toso icon' className='w-8' />
        <h1 className='text-3xl font-semibold ' >To-Do List</h1>
      </div>

      {/* input feild  */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder: text-slate-600 ' type="text" placeholder="Add you task here." />
        <button onClick={add} className='border-none rounded-full bg-gray-600 w-32 h-12 text-black text-lg font-medium cursor-pointer  '>Add</button>
      </div>

      <div>
        <TodoItems text="Learning React.js" />
        <TodoItems text="Learning MERN stack" />
      </div>

    </div>
  )
}

export default Todo
