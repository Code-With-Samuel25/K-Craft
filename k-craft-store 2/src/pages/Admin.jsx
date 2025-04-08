
import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addProduct = (e) => {
    e.preventDefault();
    setProducts([...products, { ...form, id: Date.now() }]);
    setForm({ name: "", price: "", description: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <form onSubmit={addProduct} className="space-y-2 max-w-md">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
        <button className="bg-forest text-white px-4 py-2 rounded">Add Product</button>
      </form>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold">{p.name}</h3>
            <p>${p.price}</p>
            <p className="text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
