import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contador from './components/Contador/Contador'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Bienvenida from './components/Bienvenida/Bienvenida';

function App() {


  return (
    <>
      <div>
        <h1>Adventurer's Store</h1>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Bienvenida />} />
            <Route exact path="/cosas" element={<ItemListContainer />} />
            <Route exact path="/" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>


      
        
        <Contador />
      </div>
  
    </>
  )
}


export default App
