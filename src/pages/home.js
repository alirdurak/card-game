import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux';


import CardGrid from '../components/card-grid';
import Scores from "../components/scores"
import Navbar from '../components/navbar';


function Home() {
  const user = useSelector(state=> state.auth.user)

  return (
    <Flex  direction="column" gap={20} >
      <Navbar/>
      <Text fontSize={50} >Welcome {user&& user.displayName} </Text>
      <Scores/>
      <CardGrid/>
      
      

        

      
    </Flex>
  )
}

export default Home
