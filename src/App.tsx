import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import '@fontsource/inter';
import './App.css';
import AllRoutes from './AllRoutes';

const Container = styled.div`
  height: calc(100% - 120px);
`;

function App() {
  return (
    <Container>
      <AllRoutes />
    </Container>
  );
}

export default App;
