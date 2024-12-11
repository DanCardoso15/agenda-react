import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AgendamentoForm from './pages/AgendamentoForm/AgendamentoForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<AgendamentoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
