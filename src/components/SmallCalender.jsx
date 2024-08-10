import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../utils'
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';

const SmallCalender = () => {

const [currentMonthIdx , setCurrentMonthIdx] = useState(dayjs().month());
const [currentMonth , setCurrentMonth] = useState(getMonth())


const {monthIndex,
      setSmallCalenderMonth,
      daySelected,
      setDaySelected
    } = useContext(GlobalContext)

useEffect(()=>{
    setCurrentMonth(getMonth(currentMonthIdx))
},[currentMonthIdx])

useEffect(() => {
    setCurrentMonthIdx(monthIndex)
  } , [monthIndex])


const handlePrevMonth = () => {
    console.log(currentMonthIdx)
    setCurrentMonthIdx(currentMonthIdx-1);
}

const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx+1);
}

const getDayClass = (day) => {
    const format = "DD-MM-YY"
    const nowDay = dayjs().format(format)
    const currDay = day.format(format)
    const slcDay = daySelected &&  daySelected.format(format)

    if(nowDay === currDay) {
        return "bg-blue-500 rounded-full text-white"
    }
    else if(currDay === slcDay){
        return "bg-blue-100 rounded-full text-blue-700"
    }
    else return ""
}

// console.log(currentMonth[0])
return (
    <div className='mt-8'>
        <header className='flex justify-between items-center'>
            <p className='text-gray-500 font-bold w-40'>
          {dayjs(new Date(dayjs().year(),currentMonthIdx)).format("MMMM YYYY")}
            </p>
        <button onClick={handlePrevMonth}>
            <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>chevron_left</span>
        </button>

        <button onClick={handleNextMonth}>
            <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>chevron_right</span>
        </button>
        </header>

        <div className='grid grid-cols-7 grid-rows-6'>
         {currentMonth[0].map((day,i)=>
             (<span key={i} className='text-md py-2 text-center text-gray-800 font-semibold'>
                {day.format('dd').charAt(0)}
            </span>))
         }
         {currentMonth.map((row,i) => (
            <React.Fragment key={i}>
            {row.map((day,idx)=>(
              <button key={idx}
              onClick={()=> {
                setSmallCalenderMonth(currentMonthIdx)
                setDaySelected(day)
              }}
              className={`py-1 w-full ${getDayClass(day)}`}>
                <span className='text-sm'>{day.format('D')}</span>
              </button>
            ))}
            </React.Fragment>
         ))}
        </div>
    </div>
  )
}

export default SmallCalender