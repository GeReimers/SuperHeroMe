import React from 'react';
/*import { Input } from '@chakra-ui/core';*/

import {
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	Image,
  } from '@chakra-ui/core';
  
  export default function Profile() {
	return (
	  <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
		<Flex p={8} flex={1} align={'center'} justify={'center'}>
		  <Stack spacing={4} w={'full'} maxW={'md'}>
		  <Image
			alt={'Login Image'}
			/*objectFit={'cover'}*/
			src={
				require("../images/hero_login.PNG")
			}
            
		  />
			<Heading fontSize={'2xl'}>Become a Superhero!</Heading>
			<Heading fontSize={'l'}>Batman or Wonderwoman? Tell us who you are!</Heading>
			<FormControl id="text">
			  <FormLabel>Your superhero name</FormLabel>
			  <Input type="text" />
			</FormControl>
			<FormControl id="email">
			  <FormLabel>Email address</FormLabel>
			  <Input type="email" />
			</FormControl>
			<FormControl id="password">
			  <FormLabel>Password</FormLabel>
			  <Input type="password" />
			</FormControl>
			<FormControl id="password">
			  <FormLabel>Confirm Password</FormLabel>
			  <Input type="password" />
			</FormControl>
			<Stack spacing={6}>
			  <Stack
				direction={{ base: 'column', sm: 'row' }}
				align={'start'}
				justify={'space-between'}>
				<Checkbox>Remember me</Checkbox>
				<Link color={'red.50'}>Forgot password?</Link>
			  </Stack>
			  <Button colorScheme={'red'} variant={'solid'}>
				Become a superhero!
			  </Button>
			</Stack>
		  </Stack>
		</Flex>
	  </Stack>
	);
  }

