import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Container, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Errorpage from './Errorpage';

function ItemDetail({ setBasket, basket }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
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
    } catch (error) {
      console.log(error);
      return <Errorpage></Errorpage>
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (!item) {
    return <div>No item found.</div>;
  }

  const addToBasket = () => {
    if(basket.length === 0){
      setBasket(basket.push(item))
    }
    setBasket([...basket, item]);
    console.log(basket);
  };

  const previousItemId = parseInt(id) - 1;
  const nextItemId = parseInt(id) + 1;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <IconButton component={Link} to={`/shopping/${previousItemId}`} className="fixed top-4 right-4">
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 md:flex-row items-center">
        <img className="object-contain max-w-sm rounded-lg" src={`${item.image}`} alt={item.title} />
        <Container maxWidth="md" className="flex flex-col gap-4">
          <Typography variant='h4' className="font-bold">{item.title}</Typography>
          <Typography variant='subtitle1' color="textSecondary">Category: {item.category}</Typography>
          <Typography variant='body1'>{item.description}</Typography>
          <Typography variant='body2'>{`Rating: ${item.rating.rate} (${item.rating.count} reviews)`}</Typography>
          <Typography variant='h5' className="font-semibold">${item.price}</Typography>
          <div className="flex gap-2">
            <Button variant="contained" color="primary" size="large">Buy Now</Button>
            <Button variant="outlined" color="primary" size="large" onClick={addToBasket}>Add To Basket</Button>
          </div>
        </Container>
      </div>
      <IconButton component={Link} to={`/shopping/${nextItemId}`} className="fixed top-4 left-4">
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default ItemDetail;
