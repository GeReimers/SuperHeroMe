import { Container, Flex, Spinner, VStack } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Post from "./post";
import db from "./../lib/firebase";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';




const Home = () => {
  //useState Hook used to track state/data within our app -> acepts an initial state and returns two values: current state and function that updates state
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // use Effect hook to handle the initial fetching of posts

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      // Store fetched posts from database to setPost state
        setPosts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)
    // otherwise we would need to manually refresh website
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(_posts);
      });
  }, []);


  if (isLoading) {
    return (
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  return ( //rendering lists of post; post.js receives posts and displays it
    <> 
    
      
      
      <Container maxW="md" centerContent p={8}>
      <VStack spacing={8} w="100%">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </VStack>
        

      </Container>
      

    </>
  );

};

export default Home;
