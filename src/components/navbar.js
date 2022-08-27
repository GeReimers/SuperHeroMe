import { Box, Container, Flex } from "@chakra-ui/core";
import React from "react";
import AddNewPost from "./add-new-post";
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box position="sticky" top={0} p={4} bg="red.50" zIndex={1}>
      <Container maxW="md" centerContent>
        <Flex justifyContent="flex-end" w="100%" position="sticky" top={0}>
          <AddNewPost />
        </Flex>
      </Container>
      <div>
      <li>
      <Link to="/startpage">Start</Link>
    </li>
    <li>
      <Link to="/home">HeroFeed</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
      <Link to="/challenge">Challenge of the day</Link>
    </li>
    </div>
    </Box>
  );
};

export default Navbar;
