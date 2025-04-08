
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Store from "./pages/Store";
import Purchase from "./pages/Purchase";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <div className="bg-wood min-h-screen text-forest">
        <nav className="bg-forest text-white p-4 flex justify-between">
          <h1 className="text-xl font-bold">K Craft</h1>
          <div className="space-x-4">
            <Link to="/">Store</Link>
            <Link to="/purchase">Purchase</Link>
            <Link to="/admin">Admin</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
