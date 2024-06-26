import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import { Link } from 'react-router-dom';

export default function ShoppingCard({ image, title, price, rating, id }) {
  const [bookmarked, setBookmarked] = React.useState(false);

  const clickSave = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">Rating: {rating}</Typography>
        <IconButton
          aria-label="bookmark"
          variant="plain"
          color={bookmarked ? 'error' : 'neutral'}
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          onClick={clickSave}
        >
          {bookmarked ? <BookmarkAdded /> : <BookmarkAdd />}
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={image}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
        <Link to={`/shopping/${id}`}>
          Explore
        </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
