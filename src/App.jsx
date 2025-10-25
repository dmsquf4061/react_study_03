import reactLogo from './assets/react.svg'
import './App.css'

import Gnb from './components/common/gnb';
import LandingPage from './pages/landing';
import FootergPage from './pages/footer';

function App() {
  return (
    <>
      {/* 헤더 */}
      <Gnb />

      {/* 본문 */}
      <LandingPage />

      {/* 풋터 */}
      <FootergPage />
    </>
  )
}

export default App
