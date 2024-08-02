import React, { useEffect, useState } from 'react';

const App = () => {
  const [date, setDate] = useState({ month: '', day: '' });

  useEffect(() => {
    fetch('http://222.255.238.160:5000/date')
      .then(response => response.json())
      .then(data => setDate({ month: data.month, day: data.day }))
      .catch(error => console.error('Error fetching date:', error));
  }, []);

  return (
    <div>
      <h1>Today is {date.month} and {date.day}</h1>
    </div>
  );
};

export default App;


// This line to learn and test git