// Styles
import "./App.css";

// Components
import Routes from "./pages/Routes";

import { HashRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Routes />
      </Container>
    </HashRouter>
  );
}

export default App;
