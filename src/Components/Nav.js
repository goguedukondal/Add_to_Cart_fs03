import React from "react";
import { Flex, Box} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <Flex
      spacing="24px"
      backgroundColor="teal"
      border="1px"
      borderColor="gray.200"
      borderRadius="10px"
      m="10px"
      justify='space-around' 
      align='center'
      h='40px'
      p={6}
    
    >
      <Box  h="80%"  cursor='pointer'>
        <NavLink to='/' >Home</NavLink>
       
      </Box>
      <Box  h="80%"  cursor='pointer'>
      <NavLink to='/product'>Product</NavLink>
      </Box>
      <Box  h="80%"  cursor='pointer'>
      <NavLink to='/cart'>Add To Cart</NavLink>
      </Box>
    </Flex>
  );
}

export default Nav;
