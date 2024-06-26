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
  const [reduceitemsarr, setreduceitemsarr] = useState([]);

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
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
            <Button variant="outlined" color="primary" size="large">Add To Basket</Button>
          </div>
        </Container>
      </div>
      <IconButton component={Link} to="/shopping" className="fixed top-4 left-4">
        <ArrowBackIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default ItemDetail;
