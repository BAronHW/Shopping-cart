import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CheckoutItemCard({ basketItem }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={basketItem.image}
            alt={basketItem.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {basketItem.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              category: {basketItem.category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CheckoutItemCard;
