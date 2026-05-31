import { BrowserRouter, Route, Routes } from "react-router";
import { DesignSystemShowcase, Home, Login } from "./components/pages";
import './index.css';
import { AppContainer } from "./components/templates";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="ui" element={<DesignSystemShowcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
