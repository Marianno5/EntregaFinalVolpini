import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListConteiner'

function App() {


  return (
    <>
      <div>
        <h1>Adventurer's Store</h1>
        <NavBar />
        <ItemListContainer greeting={'Bienvenido'} />
      </div>
  
    </>
  )
}

export default App
