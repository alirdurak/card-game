import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    Flex,
    Button,
  } from '@chakra-ui/react'
import { useDispatch,useSelector } from 'react-redux'
import { resetGame } from '../redux/card-slice'


function Scores() {
  const dispatch = useDispatch()
  const currentScore = useSelector(state => state.cards.score)
  const lastScore = useSelector(state => state.cards.lastScore)
  const bestScore = useSelector(state => state.cards.bestScore)
  const handlePlay = () =>{
        dispatch(resetGame())
      }    

  return (
    <Flex>
        <Stat>
            <StatLabel>Best Score</StatLabel>
            <StatNumber>{bestScore}</StatNumber>
        </Stat>
        
          <div><Button onClick={handlePlay} variant="filled">Restart Game</Button><br />
          Score:{currentScore}
          </div>
        <Stat>
            <StatLabel>Last Score</StatLabel>
            <StatNumber>{lastScore}</StatNumber>
        </Stat>
      
    </Flex>
  )
}

export default Scores
