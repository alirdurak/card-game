import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    Flex,
    Button,
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { resetGame } from '../redux/card-slice'
function Scores() {
  const dispatch = useDispatch()
  const handlePlay = () =>{
        dispatch(resetGame())
      }    

  return (
    <Flex>
        <Stat>
            <StatLabel>Best Score</StatLabel>
            <StatNumber>0</StatNumber>
        </Stat>
          <Button onClick={handlePlay} variant="filled">Restart Game</Button>
        <Stat>
            <StatLabel>Last Score</StatLabel>
            <StatNumber>0</StatNumber>
        </Stat>
      
    </Flex>
  )
}

export default Scores
