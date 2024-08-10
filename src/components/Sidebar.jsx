import React from 'react'
import CreateEventButton from './CreateEventButton';
import SmallCalender from './SmallCalender';
import Labels from './Labels';

const Sidebar = () => {
  return (
    <div>
      <aside className='border p-5 w-64'>
        <CreateEventButton/>
        <SmallCalender/>
        <Labels/>
      </aside>
    </div>
  )
}

export default Sidebar