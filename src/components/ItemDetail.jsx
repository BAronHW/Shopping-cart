import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';


function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (<div className='flex justify-center items-center'><CircularProgress></CircularProgress></div>)
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!item) {
    return <div>No item found.</div>;
  }

  return (
    <div className='flex justify-center items-center'>
      <img className='object-fill max-w-sm' src={`${item.image}`}></img>
      <div>
        <Typography>{item.title}</Typography>
      </div>
    </div>
  );
}

export default ItemDetail;
