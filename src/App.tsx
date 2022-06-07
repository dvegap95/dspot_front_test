import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";
import "@fontsource/inter";
import HomeView from "./views/HomeView";

const Container = styled.div`
  height: calc(100vh - 60px);
`;

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
