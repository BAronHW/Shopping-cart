import React, { useEffect, useState } from 'react';
import CheckoutItemCard from './CheckoutItemCard';
import Errorpage from './Errorpage';
import { CircularProgress, Typography } from '@mui/material';

function Checkout({ basketarr }) {
  const [basketstate, setBasketState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (basketarr && basketarr.length > 0) {
      // Only set basketstate if it is currently empty
      if (basketstate.length === 0) {
        setBasketState(basketarr);
      }
      setLoading(false);
    } else {
      setError("No items in the basket");
      setLoading(false);
    }
  }, [basketarr, basketstate.length]);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <CircularProgress />
      </div>
    );
  }

  if (basketstate.length === 0) {
    return (
      <div className='flex items-center justify-center'>
        <Typography variant='h2' fontWeight={"bold"}>You have an empty basket</Typography>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center'>
      {basketstate.map((elem, index) => (
        <CheckoutItemCard basketItem={elem} key={elem.id || index} />
      ))}
    </div>
  );
}

export default Checkout;
