import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { AccountPage } from './pages/AccountPage/AccountPage'
import { PostAddPage } from './pages/PostAddPage/PostAddPage'
import { ErrorsPage } from './pages/ErrorsPage/ErrorsPage'
import { PropertyPage } from './pages/PropertyPage/PropertyPage'
import { ThemeProvider } from '@mui/material'
import { theme } from './assets/theme'
import './assets/scss/App.scss'


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/post-ad" element={<PostAddPage />} />
          <Route path="property/:id" element={<PropertyPage />} />
          <Route exact path="*" element={<ErrorsPage />} />
        </Routes>
      </MainLayout>
  </ThemeProvider>
  )
}
