import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import '../App.css'
import {increase, decrease} from '../control/cartSlice'
import { useDispatch } from 'react-redux';



const Product = ({id, title, price, description, image, quantity}) => {

  const dispatch = useDispatch()

  const handleDecrease = () => {
    if(quantity > 0){
      dispatch(decrease(id))
    }
  }
  
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
          <Button size="large" onClick={()=>{dispatch(increase(id))}}><BsChevronUp/></Button>
          <p>{quantity}</p>
          <Button size="large" onClick={handleDecrease}><BsChevronDown/></Button>
        </div>
        
      </CardActions>
    </Card>
    </div>
  )
}

export default Product
