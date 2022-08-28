import React from 'react';
import "./../index.css";
import {Box, Container, Flex, Spinner, VStack, Center } from "@chakra-ui/core";
import {
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Heading,
	Input,
    Text,
	Link,
	Stack,
	Image,
  } from '@chakra-ui/core';

function Challenge (){
	return (
        <Container maxW="container.xl" p={0} centerContent>
            <Flex py={2}>
                <Heading fontSize={'2xl'}>You want to have even more impact?</Heading>
            </Flex>
            <Flex py={2} >
                <text>Then our local challenges are just right for you!
                Team up with other local superheroes and do something good together with our weekly changing actions</text>  
            </Flex>
            <Flex w="100vh" py={2} >
                <VStack m={2} border='1px' borderColor='gray.200'>
                    <img src={require("../images/clean_up.jpeg")} />
                    <Text>  <b>What?</b> Collecting garbage in the nature reserve   <br></br>
                            <b>When?</b>  03.09.22 / 11:00-14:00  <br></br>
                            <b>Where?</b> Naturschutzgebiet Volksdorfer Teichweisen, Hamburg <br></br>
                    </Text>
                </VStack>
                <VStack m={2} border='1px' borderColor='gray.200'>
                    <img src={require("../images/river_clean2.jpg")} />
                    <Text>  <b>What?</b>  Cleaning of the Alster river bank  <br></br>
                            <b>When?</b>  10.09.22 / 08:30-11:30  <br></br>
                            <b>Where?</b> Twietenkoppelbrücke, 22395 Hamburg  <br></br>
                    </Text>
                </VStack>
                </Flex>
                <Flex w="100vh" py={2} >
                <VStack m={2} border='1px' borderColor='gray.200'>
                    <img src={require("../images/river_sponsored.png")} />
                    <Text>  <b>What?</b> HATSRERRN BIER PRESENTS: Elbstrand Cleanup 2022   <br></br>
                            <b>When?</b>  15.09.22 / 11:00-14:00  <br></br>
                            <b>Where?</b> Elbstrand, Hamburg <br></br>
                    </Text>
                </VStack>
                <VStack m={2} border='1px' borderColor='gray.200'>
                    <img src={require("../images/create_challenge.png")} />
                    <Text>  <b>What?</b> Submit your own superhero challenge<br></br>
                            <b>When?</b> Send us a description and picture{' '}
                            <Link color='red.400' href=' https://wa.me/1XXXXXXXXXX?textI%20want%20to%20submit%20a%20SuperHeroMe-Challenge!%0AWhat%3F....%0AWhen%3F....%0AWhere%3F.....'> 
                            <b>via WhatsApp</b> <br></br>
                            </Link>
                            <b>Where?</b> We will update our challenges each Friday<br></br>
                    </Text>
                </VStack>
                
    
            </Flex>
        </Container>
   
        
        )
    }

export default Challenge;