import React from 'react';
import dayjs from 'dayjs';

class CurrentDate extends React.Component {
  render() {
    const currentDate = new Date().toDateString()
    return (
      <div>
        <h1>Current Date:</h1>
        <p>{currentDate}</p>
      </div>
    );
  }
}

export default CurrentDate;
