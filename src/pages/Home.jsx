import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [buses, setBuses] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setBuses(["Bus 24A", "Bus 56", "Bus 101"]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-lg font-semibold text-gray-700">Find Your Bus</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter route or stop"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow border p-2 rounded-md outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-500">Fetching buses...</p>}
      {!loading && buses.length > 0 && (
        <ul className="space-y-2">
          {buses.map((bus, index) => (
            <li key={index} className="p-3 bg-white rounded shadow">
              {bus}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Home;
