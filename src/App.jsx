
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import NotFoundPage from './pages/not-found';
import ProgramPage from './pages/program';

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/program' element={<ProgramPage />}></Route>

          {/* 에러 페이지 */}
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
