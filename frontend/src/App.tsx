import { BrowserRouter, Route, Routes } from "react-router";
import { DesignSystemShowcase, Home, Login, Users } from "./components/pages";
import { ProtectedRoute, PublicOnlyRoute } from "./components/molecules";
import { AppContainer, DashboardLayout } from "./components/templates";
import { AuthProvider } from "./context";
import './index.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainer />}>
            <Route element={<PublicOnlyRoute />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="ui" element={<DesignSystemShowcase />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
