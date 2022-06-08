import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import '@fontsource/inter';
import './App.css';
import FriendList from './views/FriendListView';
import FriendDetails from './views/FriendDetailsView';

const Container = styled.div`
  height: calc(100% - 120px);
`;

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/friends/:id" element={<FriendDetails />} />
        </Routes>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
