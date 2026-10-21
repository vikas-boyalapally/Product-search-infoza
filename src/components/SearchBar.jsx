function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="input-group">
      <span className="input-group-text">🔍</span>

      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;