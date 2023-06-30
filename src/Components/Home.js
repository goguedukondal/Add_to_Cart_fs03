import React from 'react'
import {Container,Box,Heading} from '@chakra-ui/react'
function Home() {
  return (
    <Container maxW='98%' bg='blue.600' centerContent style={{border:"1px solid black",margin:"20px",padding:"20px"}}>
        <Heading>Home Component</Heading>
  <Box padding='4' bg='white' color='black' maxW='md' >
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
  </Box>
  <Box padding='4' bg='white' color='black' maxW='md' >
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
  </Box>
</Container>
  )
}

export default Home