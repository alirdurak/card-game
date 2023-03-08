
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCard } from '../redux/card-slice'
import { useAutoAnimate } from '@formkit/auto-animate/react'


function CardItem({item}) {
  const dispatch = useDispatch()
  const [animationParent] = useAutoAnimate()
  const handleClick = () =>{
    dispatch(selectCard(item.id))
  }

  return (
    <div key={item.id} ref={animationParent}   style={{
      padding: "0px",
      margin: "0px",
      width: "6rem",
      height: "6rem",
      
     
    }}>
      <img onClick={handleClick} ref={animationParent} style={{
       height: "100%",
       width: "100%",
      cursor: "pointer",
        margin: "0px",
        padding: "0px"
      }} alt={item.name} src={item.status === "hidden"? item.nonRevealedImage : item.revealedImage}  />
    </div>
  )
}

export default CardItem
