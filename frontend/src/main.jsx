import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Installations } from './pages/Installations';
import { AfterSales } from './pages/AfterSales';
import { ClientFeedback } from './pages/ClientFeedback';
import { KPIs } from './pages/KPIs';
import { Sales } from './pages/Sales';
import { Support } from './pages/Support';
import { Settings } from './pages/Settings';

export const Logout = () => {
  localStorage.clear();

  return <Navigate to="/login" />
}

const RegisterAndLogout = () => {
  localStorage.clear();

  return <Register />
}

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/installations",
    element: <ProtectedRoute>
      <Installations />
    </ProtectedRoute>
  },
  {
    path: "/after-sales",
    element: <ProtectedRoute>
      <AfterSales />
    </ProtectedRoute>
  },
  {
    path: "/client-feedback",
    element: <ProtectedRoute>
      <ClientFeedback />
    </ProtectedRoute>
  },
  {
    path: "/kpis",
    element: <ProtectedRoute>
      <KPIs />
    </ProtectedRoute>
  },
  {
    path: "/sales",
    element: <ProtectedRoute>
      <Sales />
    </ProtectedRoute>
  },
  {
    path: "/support",
    element: <ProtectedRoute>
      <Support />
    </ProtectedRoute>
  },
  {
    path: "/settings",
    element: <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
