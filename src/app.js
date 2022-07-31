import { Container, Flex, Spinner, VStack } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Post from "./components/post";
import db from "./lib/firebase";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from "./components/home";
import Profile from "./components/profile";
import Challenge from "./components/challenge";



const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

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

  return (
    <>
    <Router>
      <Navbar />
      
      <Container maxW="md" centerContent p={8}>
        <VStack spacing={8} w="100%">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </VStack>
        <Routes>
        <Route path='/home' element = {<Home/>} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/challenge' element = {<Challenge/>} />
        </Routes>
      </Container>
      
      </Router>
    </>
  );

};

export default App;
