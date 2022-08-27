import React from 'react';
import "./../index.css";
import {Box, Container, Flex, Spinner, VStack, Center } from "@chakra-ui/core";


function startpage (){
	return (
    <Container maxW="container.xl" p={0} centerContent>
        <Flex py={2} bg='red.50'>
            <text>Is it a bird? Is it a plane? Is it superman? No, it's <b>you</b>!</text>
        </Flex>
        <Flex py={2} bg='red.50'>
            <text>Post your good deeds or get inspired by the deeds of other local superheroes!</text>  
        </Flex>
        <Flex w="100vh" py={2} bg='red.50'>
            <VStack m={2}>
                <img src={require("../images/cat.png")} />
                <h1>You don't have to rescue a kitten from a tree...</h1>
            </VStack>
            <VStack m={2}>
                <img src={require("../images/firemen.jpg")} />
                <h1>or rescue people from a burning house...</h1>
            </VStack>

        </Flex>
        <Flex w="100vh" py={2} bg='red.50'>
            <VStack m={2}>
            <img src={require("../images/tree.jpg")} />
                <h1>or solve the climate crisis alone...</h1>
            </VStack>
            <VStack m={2}>
                <img src={require("../images/superherome.jpg")} />
                <h1><b>because every little deed can make a big difference!</b></h1>
            </VStack>

        </Flex>
    </Container>
    

    
    )
}

export default startpage;