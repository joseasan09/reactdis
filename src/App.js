
import './App.css';
import ItemListContainer from './componets/ItemListContainer/ItemListVontainer';
import NavBar from './componets/navbar/navbar';
import dispenser from "./componets/CartWidget/assets/dispenser.jpg" 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <img src={dispenser} alt="dispenser"/> 


      <ItemListContainer greeting={"Bienvenidos a BlueMain Online"}/>
      
  
    </div>
  )
}

export default App;
