import { useState , useContext , useEffect } from 'react';
// import './App.css'
import React from 'react'
import './index.css'
import { getMonth } from './utils'

import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month';
import GlobalContext from './context/GlobalContext';
import EventModel from './components/EventModel';

function App() {

//  console.log(getMonth())

const [currentMonth ,setCurrentMonth] = useState(getMonth());
const {monthIndex , showEventModel , setShowEventModel} = useContext(GlobalContext);

useEffect(() => {
  setCurrentMonth(getMonth(monthIndex
    ));
} , [monthIndex]);

  return (
    <>
    <React.Fragment>
      {showEventModel &&  <EventModel/>}
      <div className='h-screen flex flex-col'>

        <CalendarHeader/>

        <div className='flex flex-1'>
          <Sidebar/>
          <Month month={currentMonth}/>

        </div>

      </div>
    </React.Fragment>
    </>
  )
}

export default App
