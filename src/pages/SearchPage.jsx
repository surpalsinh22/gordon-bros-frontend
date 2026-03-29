// SearchPage.jsx
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { allProducts } from "../datas/products";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const { query, setQuery } = useContext(SearchContext);

  // filtered products based on query
  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Products</h2>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here..."
        className="w-full p-2 mb-6 border rounded-lg"
      />

      {/* Results */}
      <div className="flex flex-wrap gap-10 ml-16">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block"
            >
              <div className="w-64 h-[400px] border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-500 mb-1">Gordon & Bros</p>
                  <h3 className="text-md font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-sm mt-1">
                    ⭐⭐⭐⭐☆
                  </div>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-green-600">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ₹{product.price + 200}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}