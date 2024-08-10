import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
const Day = ({ day, rowIdx }) => {

  const [dayEvents , setDayEvents] = useState([])
  const {daySelected , setDaySelected , setShowEventModel , savedEvents , setSelectedEvent} = useContext(GlobalContext)
  // console.log(savedEvents)

  useEffect( ()=>{

    // console.log({savedEvents});
    const events = savedEvents.filter((evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  } , [savedEvents, day]);

   function getCurrentDayClass(){
    const format = "DD-MM-YY";
    const slcDay = daySelected &&  daySelected.format(format)
    // console.log("selected day is ",slcDay , " and day is " , day)
    if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
      return "bg-blue-600 text-white rounded-full w-7";
    }

    if(day.format(format)===slcDay) {
      return "bg-blue-100 rounded-full text-blue-800 text-xl";
    }

    return "";
   }
  //  console.log(dayEvents)
   return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        {rowIdx===0 && (<p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>)}
      <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
    {day.format('DD')}
      </p>
      </header>
     <div className="flex-1 cursor-pointer" onClick={()=>{
      setDaySelected(day);
      setShowEventModel(true);
      // setSelectedEvent(null)
     }}>
      {dayEvents.map((evt,idx) => (
      <div key={idx}
      className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
       onClick={() => {
        setSelectedEvent(evt)
        console.log("event cicked!")}}>
        {evt.title}
      </div>
     ))}
     </div>
      </div>
  )
}

export default Day;