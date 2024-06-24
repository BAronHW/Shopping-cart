import React, { useEffect, useState } from 'react';
import './output.css';
import getOneItem, { get10Items } from './fetchData';
import { CircularProgress } from '@mui/material';
import ItemCarousel from './components/ItemCarousel';
import Home from './components/Home';

function App() {
  const [itemsarr, setItemsArr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await get10Items();
      setItemsArr(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 flex justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <CircularProgress />
        </div>
      ) : (
        <div>
          
          <Home></Home>
        </div>
      )}
    </div>
  );
}

export default App;
