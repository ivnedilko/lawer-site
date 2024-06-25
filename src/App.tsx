// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/about-us" element={<AboutUsPage/>} />
      <Route path="/contacts" element={<ContactsPage/>} />
    </Routes>
  )
}

export default App
