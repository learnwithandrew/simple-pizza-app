import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import PizzaTable from "./components/PizzaTable";
import Trial from "./components/Trial";

function App() {
  return (
    <div className="App">
      <h1 className="app-name">Welcome to Pizzeria App</h1>
      <AddPizzaForm />
      {/* <PizzaTable /> */}
      {/* <Trial /> */}
    </div>
  );
}

export default App;
