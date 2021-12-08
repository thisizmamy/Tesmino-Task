import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Sidebar />
          <Display />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

if (module.hot) {
  module.hot.accept();
}
