import React , {useEffect, useState} from 'react'
import { BrowserRouter } from 'react-router-dom';

import ProfilingPage from './pages/profilingPage';
function App() {
  const [backendData, setBackendData] = useState({});
  
  useEffect(() => {
    fetch("/api")
    .then(response => response.json())
    .then(data => setBackendData(data))
    .catch(error => console.error(error));
  }, []);
  
  return (
    <BrowserRouter>
    <div>
      <ProfilingPage />
      {(typeof backendData.message) === 'string' ? backendData.message : JSON.stringify(backendData)}
    </div>
    </BrowserRouter>
  )
}

export default App