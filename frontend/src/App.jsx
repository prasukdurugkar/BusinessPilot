import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import "./App.css";
import NavigationTop from "./components/Navigation/NavigationTop.jsx";
import NavigationLeft from "./components/Navigation/NavigationLeft.jsx";
import InventoryTable from "./components/Inventory/InventoryTable.jsx";
import CreateProduct from "./components/Inventory/CreateProduct.jsx";

function App() {
  return (
    <Router>
      <NavigationTop />
      <NavigationLeft />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/inventory" element={<InventoryTable />} />
        <Route exact path="/inventory/create" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
