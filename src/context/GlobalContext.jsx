import React from 'react'

const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex : (index) =>{},
    smallCalenderMonth:0,
    setSmallCalenderMonth: (index) => {},
    daySelected:null,
    setDaySelected: (day)=>{},
    showEventModel:false,
    setShowEventModel: () => {},
    dispatchCalEvent : ({type, payload}) => {},
    savedEvents:[],
    selectedEvent:null,
    setSelectedEvent : () => {},
})

export default GlobalContext;