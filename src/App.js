import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure you still have your custom styles here
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { database } from './firebase'; // Import your firebase config
import { ref, onValue } from 'firebase/database'; // Firebase Realtime Database functions

const App = () => {
  // State to store RFID data from Firebase
  const [rfidData, setRfidData] = useState([]);

  // Fetch data from Firebase on component mount
  useEffect(() => {
    const rfidRef = ref(database, 'rfid-cards'); // Reference to 'rfid-cards' in the database
    
    // Listen for changes in the 'rfid-cards' data
    onValue(rfidRef, (snapshot) => {
      const data = snapshot.val(); // Get the data as an object
      const rfidList = Object.keys(data).map(key => ({
        uid: key,
        value: data[key]
      })); // Transform object into an array for rendering
      setRfidData(rfidList); // Update state with the list
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">RFID Data</h1>
      {rfidData.length > 0 ? (
        <ul className="list-group">
          {rfidData.map((item) => (
            <li key={item.uid} className="list-group-item">
              <strong>Card UID:</strong> {item.uid} <br />
              <strong>Value:</strong> {item.value}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No data available</p>
      )}
    </div>
  );
};

export default App;