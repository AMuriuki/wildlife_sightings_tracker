import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SightingsPage from "./Pages/SightingsPage";
import DetailsPage from './Pages/DetailsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SightingsPage />} />
        <Route path='/details' element={<DetailsPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}