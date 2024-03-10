import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { ErrorsPage } from './pages/ErrorsPage/ErrorsPage'
import './App.css'

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route exact path="*" element={<ErrorsPage />} />
      </Routes>
    </MainLayout>
  )
}
