import React from 'react'
import { Grid } from '@chakra-ui/react';
import { cardArray } from '../assets/data';
import CardItem from './card-item';
function CardGrid() {
  return (
    <div className='grid-div'>
      <Grid marginX={60}  templateColumns='repeat(6, 1fr)' >
        {cardArray.map((item)=>
          <CardItem  item={item} />
        )}
          
      </Grid>
      
    </div>  
    
  )
}

export default CardGrid
