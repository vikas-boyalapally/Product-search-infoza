import { useEffect, useState } from "react";
import { getProducts } from "./services/productApi";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;

        case "price-high":
          return b.price - a.price;

        case "name-a-z":
          return a.title.localeCompare(b.title);

        case "name-z-a":
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    });

  // Product details page
  if (selectedProduct) {
    return (
      <div className="app">
        <Navbar productCount={products.length} />

        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">
            Loading...
          </span>
        </div>

        <p className="mt-3">
          Loading products...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container py-5 text-center">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar productCount={products.length} />

      <section className="hero page-container">
        <h1>Find the right product.</h1>

        <p>
          Search, filter and explore products from our collection.
        </p>
      </section>

      <section className="product-section page-container">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onReset={() => {
            setSearchTerm("");
            setSelectedCategory("all");
            setSortOption("default");
          }}
        />

        <p className="product-count mt-4">
          Showing {filteredProducts.length} of{" "}
          {products.length} products
        </p>

        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            onViewDetails={setSelectedProduct}
          />
        ) : (
          <div className="text-center py-5">
            <h3>No products found</h3>

            <p className="text-muted">
              Try changing your search or category filter.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;