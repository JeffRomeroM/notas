import Header from "./components/header/Header"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  
  return (
    <>
    <CssBaseline />
    <Header />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage  />} />
        <Route path="/" element={<HomePage />} />
    </Routes>
      
    </>
  )
}

export default App
