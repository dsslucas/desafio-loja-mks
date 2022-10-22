import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Home from './screens/Home';

const Wrapped = styled.div`
  background-color: #E5E5E5;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

function App() {
  return (
    <Wrapped>
      <Home />
    </Wrapped>
  );
}

export default App;
