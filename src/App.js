import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from './componens/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dashboard />} />
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
