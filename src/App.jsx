import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {


  return (
    <>
      <div>
        <h1>Adventurer's Store</h1>
        <NavBar />
        <ItemListContainer greeting={'Bienvenido'} />
        <ItemDetailContainer />
      </div>
  
    </>
  )
}

export default App
