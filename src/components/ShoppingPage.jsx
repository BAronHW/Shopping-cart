import React from 'react';
import Card from './ShoppingCard';
import Sidebar from './Sidebar';
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function ShoppingPage({ itemsarr }) {

  const getUniqueCategories = (items) => {
    const categories = new Set();
    items.forEach(item => {
      categories.add(item.category);
    });
    return Array.from(categories);
  };

  if (!itemsarr || itemsarr.length === 0) {
    return <Typography variant='h2' fontWeight={"bold"}>No Items Found</Typography>;
  }

  return (
    <div className='flex justify-center items-center my-4 flex-col'>
      <div className='flex flex-row'>
      <div className='flex flex-col mt-4'>
        <Typography variant='h6' fontWeight={"bold"}>{`Items (${itemsarr.length})`}</Typography>
        <Sidebar catarray={getUniqueCategories(itemsarr)} />
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
          {itemsarr.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              rating={item.rating.rate}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
