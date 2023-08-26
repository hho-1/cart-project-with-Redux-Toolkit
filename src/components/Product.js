import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import '../App.css'



const Product = ({id, title, price, description, image, rating, quantity1}) => {

  
  const [quantity, setQuantity] = useState(0)

  
  return (
    <div>
      <Card sx={{ width: 350, height:800 }} className='productCard'>
      <CardMedia
        sx={{ height: 350, width:270 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h6" component="div" className='card-footer-left'>
          ${price}
        </Typography>
        <div className='card-footer-right'>
          <Button size="large" onClick={()=>setQuantity((prev) => prev + 1)}><BsChevronUp/></Button>
          <p>{quantity}</p>
          <Button size="large" onClick={()=>setQuantity((prev) => prev > 0 ? prev - 1 : 0)}><BsChevronDown/></Button>
        </div>
        
      </CardActions>
    </Card>
    </div>
  )
}

export default Product
