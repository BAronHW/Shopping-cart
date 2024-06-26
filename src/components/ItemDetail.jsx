import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Container, Typography, Button, IconButton } from '@mui/material';
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
    <div className="flex justify-center items-center min-h-screen">
      <img className="object-fill max-w-sm" src={`${item.image}`} alt={item.title} />
      <div className='flex flex-col items-center justify-center gap-4 '>
        <Container maxWidth="sm" >
          <Typography variant='h4'>{item.title}</Typography>
          <Typography variant='h7'>{item.description}</Typography>  
          <Typography variant='h8'>{`Rating: ${item.rating.rate}`}</Typography>
          <Typography variant='h8'>{`Rating: ${item.rating.count}`}</Typography>     
          <Typography variant='h6'>{item.price}</Typography>               
        </Container>
        <IconButton component={Link} to="/shopping" className="fixed top-4 left-4">
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      </div>
    </div>
  );
}

export default ItemDetail;
