import React, { useEffect, useState } from 'react';
import { CircularProgress, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './output.css';
import ShoppingPage from './components/ShoppingPage';
import ItemDetail from './components/ItemDetail';

function App() {
  const [itemsArr, setItemsArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let data = [];
      for (let i = 1; i <= 20; i++) {
        const res = await fetch(`https://fakestoreapi.com/products/${i}`);
        const json = await res.json();
        data.push(json);
      }
      setItemsArr(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar setSearch={setSearch} />
        {loading ? (
          <div className="flex justify-center items-center flex-grow">
            <CircularProgress />
          </div>
        ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shopping" element={<ShoppingPage itemsarr={itemsArr} />} />
              <Route path='/shopping/:id' element={<ItemDetail/>}/>
            </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
