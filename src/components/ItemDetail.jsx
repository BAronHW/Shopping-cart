import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ErrorOutlineIcon sx={{ width: '20vw', height: '20vh' }} />
        <Typography variant="h2">Error Item Not Found</Typography>
      </div>
    );
  }

  if (!item) {
    return <div>No item found.</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <img className="object-fill max-w-sm" src={`${item.image}`} alt={item.title} />
      <Link to="/shopping">
        <ArrowBackIcon />
      </Link>
      <div>
        <Typography>{item.title}</Typography>
      </div>
    </div>
  );
}

export default ItemDetail;
