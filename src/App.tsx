import { Routes, Route } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import GatewaysView from "./views/GatewaysView";
import PeripheralDevicesView from "./views/PeripheralDevicesView";
import Header from "./components/common/Header";
import "./App.css"
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 60px;
  height: calc(100vh - 60px);
`

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/gateways" element={<GatewaysView />} />
          <Route
            path="/peripheral-devices"
            element={<PeripheralDevicesView />}
          />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Container>
      <ToastContainer/>
    </>
  );
}

export default App;
