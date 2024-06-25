import React, { useEffect, useState } from 'react';
import { CircularProgress, Container } from '@mui/material';
import ItemCarousel from './components/ItemCarousel';
import Home from './components/Home';
import Navbar from './components/Navbar';
import get10Items from './fetchData';
import './output.css';

function App() {
  const [itemsArr, setItemsArr] = useState([]);
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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar className="sticky"></Navbar>
      {loading ? (
        <div className=" flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <Container>
          <Home />
        </Container>
      )}
    </div>
  );
}

export default App;
