import Portfolio from './components/Portfolio'
import useAnalytics from './components/useAnalytics';
import { Route, Routes } from 'react-router-dom';

function App() {
  useAnalytics();

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  )
}

export default App
