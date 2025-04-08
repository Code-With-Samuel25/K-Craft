
import { useState } from "react";

const dummyProducts = [
  { id: 1, name: "Handmade Mug", price: 25, description: "Ceramic mug", image: "" },
  { id: 2, name: "Wooden Spoon", price: 15, description: "Crafted from oak", image: "" },
];

export default function Store() {
  const [products] = useState(dummyProducts);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white rounded-xl p-4 shadow">
          <div className="text-lg font-bold">{p.name}</div>
          <div>${p.price}</div>
          <p className="text-sm">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
