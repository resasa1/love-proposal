import { Routes, Route } from 'react-router-dom';
import './App.css'
import CountdownPage from '../src/pages/CountdownPage';
import AnnivPage from '../src/pages/AnnivPage';
import WhoAreYou from '../src/pages/WhoAreYou';

function App() {

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<WhoAreYou />} />
        <Route path='/wait' element={<CountdownPage />} />
        <Route path='/happy-anniversary' element={<AnnivPage />} />
      </Routes>
    </>
  )
}

export default App
