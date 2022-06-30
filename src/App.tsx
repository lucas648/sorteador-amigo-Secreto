import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/formulario/index';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Formulario}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
function createBrowserHistory() {
  throw new Error('Function not implemented.');
}

