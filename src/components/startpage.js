import React from 'react';
import "./../index.css";
import {Box, Container, Flex, Spinner, VStack, Center, Heading } from "@chakra-ui/core";


function startpage (){
	return (
    <Container maxW="container.xl" p={0} centerContent>
        <Flex py={2}>
            <Heading fontSize={'2xl'}>Is it a bird? Is it a plane? Is it superman? No, it's you!</Heading>
        </Flex>
        <Flex py={2} >
            <Heading fontSize={'l'}>Post your good deeds or get inspired by the deeds of other local superheroes!</Heading>  
        </Flex>
        <Flex w="100vh" py={2} >
            <VStack m={2}>
                <img src={require("../images/cat.png")} />
                <h1>You don't have to rescue a kitten from a tree...</h1>
            </VStack>
            <VStack m={2}>
                <img src={require("../images/firemen.jpg")} />
                <h1>or rescue people from a burning house...</h1>
            </VStack>

        </Flex>
        <Flex w="100vh" py={2} >
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