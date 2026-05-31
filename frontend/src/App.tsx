import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Login } from "./components/pages";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
