import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Tab from './Pages/Tab';
import Author from './Pages/Author';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Flex justifyContent='center' p='10' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:author'>
            <Route index element={<Author />} />
            <Route path=':slug' element={<Tab />} />
          </Route>
        </Routes>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
