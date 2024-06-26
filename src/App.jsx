import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './output.css';
import ShoppingPage from './components/ShoppingPage';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';

function App() {
  const [itemsArr, setItemsArr] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        for (let i = 1; i <= 20; i++) {
          const res = await fetch(`https://fakestoreapi.com/products/${i}`);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const json = await res.json();
          data.push(json);
        }
        setItemsArr(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        {loading ? (
          <div className="flex justify-center items-center flex-grow">
            <CircularProgress />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping" element={<ShoppingPage itemsarr={itemsArr} />} />
            <Route path="/shopping/:id" element={<ItemDetail setBasket={setBasket} basket={basket} />} />
            <Route path="/shopping/checkout" element={<Checkout basketarr={basket} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
