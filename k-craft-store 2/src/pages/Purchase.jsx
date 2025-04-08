
export default function Purchase() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold">Purchase Product</h2>
      <form className="space-y-2">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Address" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
        <button className="bg-forest text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
