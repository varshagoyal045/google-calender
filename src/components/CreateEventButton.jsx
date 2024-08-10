import React, { useContext } from 'react';
import plus from "../assets/plus.svg";
import GlobalContext from '../context/GlobalContext';

const CreateEventButton = () => {
  const {setShowEventModel} = useContext(GlobalContext)

  return (
    <button 
    onClick={()=> setShowEventModel(true)}
    className='border py-2 px-2 rounded-full flex items-center shadow-md hover:shadow-xl'>
        <img src={plus} alt="" className='w-9 h-10'/>
        <span className='px-3 text-xl text-gray-800 font-semibold'>Create</span>
    </button>
  )
}

export default CreateEventButton;