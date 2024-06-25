import React from 'react';
import Card from './ShoppingCard';
import Sidebar from './Sidebar';


function ShoppingPage({ itemsarr }) {
  if (!itemsarr || itemsarr.length === 0) {
    return <div>No items found.</div>;
  }

  return (
    <div className='flex justify-center items-center my-4 flex-row'>
    <Sidebar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {itemsarr.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            rating={item.rating.rate}  // Fixed rating
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
