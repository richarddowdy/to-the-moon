// Styles

import "./App.css";

// Components
import Routes from "./pages/Routes";
// import Navbar from "./components/Navbar";
import { HashRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <HashRouter>
      <Container fluid>
        {/* <Navbar /> */}
        <Routes />
      </Container>
    </HashRouter>
  );
}

export default App;
