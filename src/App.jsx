import './App.css'
import Portfolio from './portfolio'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import Support from './Support';
import TermsAndConditions from './Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  )
}

export default App
