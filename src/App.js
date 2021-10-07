import "./App.css";
import Routes from "./pages/Routes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Navbar />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
