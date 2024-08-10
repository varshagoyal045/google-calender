import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext';

const labelsClasses = ["blue","pink","gray","green","red","purple","yellow"];

const EventModel = () => {

  const {
    setShowEventModel,
    daySelected,
    dispatchCalEvent,
    selectedEvent
  } = useContext(GlobalContext);

  console.log(selectedEvent)

   const [title , setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
   );
   const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
   );
   const [selectedLabel , setSelectedLabel] = useState(
    selectedEvent?  labelsClasses.find((lbl) => lbl === selectedEvent.label):  labelsClasses[0]);

  function handleSubmit(e){
    console.log("button clicked")
    e.preventDefault()
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day:daySelected.valueOf(),
      id: selectedEvent? selectedEvent.id: Date.now()
    }
    console.log(calendarEvent)
    if(selectedEvent){
      dispatchCalEvent({type: "update" , payload:calendarEvent});
    }
    else{
      dispatchCalEvent({type: "push" , payload:calendarEvent});
    }
    setShowEventModel(false);
  }
  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>

        <form className='bg-white rounded-lg shadow-2xl w-1/4'>

          <header className='bg-gray-100 px-4 py-2  flex justify-between items-center'>

            <span className='material-icons-outlined text-gray-500'>
             drag_handle
            </span>
              <div>
                {selectedEvent && (
                  <span
                  onClick = {() => {
                    dispatchCalEvent({type:"delete" , payload:selectedEvent})
                    setShowEventModel(false)}}
                  className='material-icons-outlined text-gray-500 cursor-pointer'>
                  delete
                  </span>
                )}
              <button onClick={()=> setShowEventModel(false)}>
              <span className='material-icons-outlined text-gray-500'>
              close
              </span>
            </button>
              </div>
          </header>

          <div className='p-3'>
            <div className="grid grid-cols-1/5 items-end gap-y-7">
              <div></div>
              <input
              type="text"
              name="title"
              id=""
              placeholder='Add title'
              required value={title}
              onChange={(e)=> setTitle(e.target.value)}
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'/>

              <span className='material-icons-outlined text-gray-500'>
              schedule
              </span>
              <p>{daySelected.format("dddd , MMMM DD")}</p>
              <span className='material-icons-outlined text-gray-500'>
              segment
              </span>

              <input
              type="text"
              name="description"
              id=""
              placeholder='Add a description'
              required value={description}
              onChange={(e)=> setDescription(e.target.value)}
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'/>

              <span className='material-icons-outlined text-gray-500'>
                bookmark_border
              </span>

              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass,i)=> (
                  <span
                  key={i}
                   onClick={()=> setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                    {selectedLabel === lblClass &&
                    (<span className='material-icons-outlined text-white text-sm'>
                     check
                    </span>)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <footer className='flex justify-end w-100 border-t p-3 mt-5'>

            <button type="submit"
            className='bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white rounded text-xl font-semibold'
            onClick= {(e)=>handleSubmit(e)}>
             Save
            </button>

          </footer>

        </form>

    </div>
  )
}

export default EventModel;