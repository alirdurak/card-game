import React,{useEffect} from 'react'
import { bestScore, lastScore,resetGame } from '../redux/card-slice';
import { Grid } from '@chakra-ui/react';
import { useSelector,useDispatch } from 'react-redux';
import CardItem from './card-item';
import { toast } from 'react-hot-toast';
function CardGrid(){ 
 const data = useSelector(state=>state.cards.cards)
 const dispatch = useDispatch()

 useEffect(()=>{
  if(data.every(card => card.status === "matched")){
    dispatch(bestScore())
    dispatch(lastScore())
    setTimeout(()=>{
      dispatch(resetGame())
    },2000)
    toast.success("Congrulations")
    
  }
    
 },[data,dispatch])


  return (
    <div className='grid-div'>
      <Grid marginX={60}  templateColumns='repeat(6, 1fr)' gap={2} >
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
