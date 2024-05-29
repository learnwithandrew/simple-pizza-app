import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import PizzaTable from "./components/PizzaTable";

function App() {
  return (
    <div className="App">
      <h1 className="app-name">Welcome to Pizzeria App</h1>
      <AddPizzaForm />
      <PizzaTable />
    </div>
  );
}

export default App;
