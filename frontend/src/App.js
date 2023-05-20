import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SightingsPage from "./Pages/SightingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SightingsPage />} />        
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}