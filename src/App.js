
import './App.css';
import ItemListContainer from './componets/ItemListContainer/ItemListVontainer';
import NavBar from './componets/navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer greeting={"Bienvenidos a BlueMain Online"}/>
    </div>
  );
}

export default App;
