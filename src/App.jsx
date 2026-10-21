import { useEffect, useState } from "react";
import { getProducts } from "./services/productApi";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ProductDetails from "./components/ProductDetails";
import ProductSkeletonGrid from "./components/ProductSkeletonGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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

  const formatCategoryName = (category) => {
    return category
      .split("-")
      .map((word) => {
        if (word === "mens") return "Men's";
        if (word === "womens") return "Women's";

        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

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

      const matchesMinPrice =
        minPrice === "" ||
        product.price >= Number(minPrice);

      const matchesMaxPrice =
        maxPrice === "" ||
        product.price <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice
      );
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

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOption("default");
    setMinPrice("");
    setMaxPrice("");
  };

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
      <div className="app">
        <Navbar productCount={0} />

        <section className="hero page-container">
          <h1>Find the right product.</h1>

          <p>
            Search, filter and explore products from our collection.
          </p>
        </section>

        <section className="product-section page-container">
          <ProductSkeletonGrid />
        </section>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="app">
        <Navbar productCount={0} />

        <div className="empty-state page-container">
          <div className="empty-icon">
            ⚠️
          </div>

          <h3>Unable to load products</h3>

          <p>{error}</p>
        </div>
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
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          onReset={clearFilters}
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
          <div className="empty-state">
            <div className="empty-icon">
              🔍
            </div>

            <h3>No products found</h3>

            <p>
              We couldn't find any products matching your
              current filters.
            </p>

            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;