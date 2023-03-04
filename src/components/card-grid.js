import React from 'react'
import { Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import CardItem from './card-item';
function CardGrid(){ 
 const data = useSelector(state=>state.cards.cards)
  return (
    <div className='grid-div'>
      <Grid marginX={60}  templateColumns='repeat(6, 1fr)' >
        {data.map((item)=>
          <div key={item.id}>
            <CardItem  item={item} />
          </div>
        )}

      </Grid>
      
    </div>  
    
  )
}

export default CardGrid
