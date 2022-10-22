import { Route, Routes } from 'react-router-dom';
import './App.css';
import FAQ from './components/FAQ';
import Webpage from './components/Webpage';
import Cadastro from './components/Cadastro';
import PlaylistPage from './components/PlaylistPage';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
    <div className='routes'>
      <Routes>
        <Route path='/' element={<Webpage />}>
          <Route path='' element={<Main />} />
          <Route path='/playlist/:id' element={<PlaylistPage/>}/>
        </Route>
        <Route path='/faq' element={<FAQ />} />
        <Route path='/signup' element={<Cadastro />}/>
        <Route path='/login' element={<Login />}/>
        
      </Routes>
    </div>

  );
}

export default App;
