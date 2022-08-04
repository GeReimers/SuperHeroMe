import { ChakraProvider } from "@chakra-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
  // Setting up ChakraProvider at root file to be able to use chakra UI elements
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
 

  document.getElementById("root")
);
