import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SightingsPage from "./Pages/SightingsPage";
import DetailsPage from './Pages/DetailsPage';
import NewSightingPage from './Pages/NewSightingPage';
import ApiProvider from './context/ApiProvider';

export default function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route path='/' element={<SightingsPage />} />
          <Route path='/details' element={<DetailsPage />} />
          <Route path='/new' element={<NewSightingPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
}