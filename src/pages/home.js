import React from 'react'
import { Flex, Text } from '@chakra-ui/react'


import CardGrid from '../components/card-grid';
import Scores from "../components/scores"
import Navbar from '../components/navbar';

function Home() {
  return (
    <Flex  direction="column" gap={20} >
      <Navbar/>
      <Text>Welcome User</Text>
      <Scores/>
      <CardGrid/>
      
      

        

      
    </Flex>
  )
}

export default Home
