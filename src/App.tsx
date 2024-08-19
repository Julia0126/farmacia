
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaCategorias from './components/Categorias/ListarCategorias/ListarCategorias';
import FormCategoria from './components/Categorias/FormCategoria/FormCategoria';
import DeletarCategoria from './components/Categorias/DeletarCategoria/DeletarCategoria';

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[88vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        
    </>
  );
}
export default App;