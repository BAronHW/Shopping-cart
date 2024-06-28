import React, { useEffect, useState } from 'react';
import CheckoutItemCard from './CheckoutItemCard';
import Errorpage from './Errorpage';
import { CircularProgress } from '@mui/material';

function Checkout({ basketarr }) {
  const [basketstate, setBasketState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let basketItems = [];
    let hasError = false;

    const fetchBasketItems = async () => {
      basketarr.forEach((element) => {
        fetch(`https://fakestoreapi.com/products/${element.id}`)
          .then(res => {
            if (!res.ok) {
              hasError = true;
              setError(`HTTP error! status: ${res.status}`);
              return null;
            }
            return res.json();
          })
          .then(data => {
            if (data) {
              basketItems.push(data);
            }
          })
          .catch(err => {
            hasError = true;
            setError(err.message);
            console.error('Failed to fetch basket item:', err);
          })
          .finally(() => {
            if (!hasError && basketItems.length === basketarr.length) {
              setBasketState(basketItems);
              setLoading(false);
            }
          });
      });
    };

    fetchBasketItems();
  }, [basketarr]);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Errorpage />;
  }

  return (
    <div className='flex flex-col justify-center'>
      {basketstate.map((elem, index) => (
        <CheckoutItemCard basketItem={elem} key={index} />
      ))}
    </div>
  );
}

export default Checkout;
  