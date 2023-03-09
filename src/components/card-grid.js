import React,{useEffect} from 'react'
import { bestScore, lastScore,resetGame,matchCard } from '../redux/card-slice';
import { Grid } from '@chakra-ui/react';
import { useSelector,useDispatch } from 'react-redux';
import CardItem from './card-item';
import { toast } from 'react-hot-toast';
import { useAutoAnimate } from '@formkit/auto-animate/react'
function CardGrid(){ 
 const data = useSelector(state=>state.cards.cards)
 const selectedCards = useSelector(state=> state.cards.selectedCards)
 const dispatch = useDispatch()
  const [animationParent] = useAutoAnimate()

 useEffect(()=>{
  if(data.every(card => card.status === "matched")){
    dispatch(bestScore())
    dispatch(lastScore())
    setTimeout(()=>{
      dispatch(resetGame())
    },2000)
    toast.success("congratulations")
    
  }
  if(selectedCards.length>1){
    setTimeout(()=>{
      dispatch(matchCard())
    },500)
  }
    
 },[data,dispatch,selectedCards])


  return (
    <div className='grid-div'>
      <ul style={{
        listStyle: "none"
      }} ref={animationParent} >
        <Grid  marginX={60}  templateColumns='repeat(6, 1fr)' gap={2} ref={animationParent} >
          {data.map((item)=>
            <li ref={animationParent}  key={item.id}>
              <CardItem  item={item} />
            </li>
          )}
        </Grid>
      </ul>
      
    </div>  
    
  )
}

export default CardGrid
