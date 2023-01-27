import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    Flex,
  } from '@chakra-ui/react'
function Scores() {
  return (
    <Flex>
        <Stat>
            <StatLabel>Best Score</StatLabel>
            <StatNumber>0</StatNumber>
        </Stat>
        <Stat>
            <StatLabel>Last Score</StatLabel>
            <StatNumber>0</StatNumber>
        </Stat>
      
    </Flex>
  )
}

export default Scores
