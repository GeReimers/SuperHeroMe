import { Box, Container, Flex, HStack, Spacer, Center, Image } from "@chakra-ui/core";
import React from "react";
import AddNewPost from "./add-new-post";
import {  Link } from "react-router-dom";
import AvatarWithRipple from "./avatar";

const Navbar = () => {
  return (
    <Box position="sticky" top={0} p={4} bg="red.50" zIndex={1}>
      <Container maxW="md" centerContent>
        <Flex spacing ='24px' justifyContent="flex-end" w="100%" position="sticky" top={0}>
        <Box w='100px'>
          <Center>
          <Link to="/startpage"><b>Start</b></Link>
          </Center>
        </Box>
        <Spacer/>
        <Box w='100px'>
          <Center>
          <Link to="/profile"><b>Become a superhero</b></Link>
          </Center>
        </Box>
        <Spacer/>
        <Box w='100px'>
          <Center>
            <Image
            boxsize='100px'
            src={require("../images/mini_hero.png")}
            />
          </Center>
        </Box>
        <Spacer/>
        <Box w='100px'>
          <Center>
          <Link to="/home"><b>HeroFeed</b></Link>
          </Center>
          </Box>
        <Spacer/>
        <Box w='100px'>
          <Center>
          <Link to="/challenge"><b>Challenge of the day</b></Link>
          </Center>
          </Box>
          <Spacer/>          
          <Box>
          <AddNewPost />
          </Box>
          </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
