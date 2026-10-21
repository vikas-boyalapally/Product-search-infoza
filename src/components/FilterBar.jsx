function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  onReset,
}) {
  return (
    <div className="filter-panel">
      <div className="row g-3 align-items-end">
        <div className="col-md-5">
          <label className="form-label">
            Category
          </label>

          <select
            className="form-select"
            value={selectedCategory}
            onChange={(event) =>
              onCategoryChange(event.target.value)
            }
          >
            <option value="all">
              All Categories
            </option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-5">
          <label className="form-label">
            Sort By
          </label>

          <select
            className="form-select"
            value={sortOption}
            onChange={(event) =>
              onSortChange(event.target.value)
            }
          >
            <option value="default">
              Default
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="name-a-z">
              Name: A to Z
            </option>

            <option value="name-z-a">
              Name: Z to A
            </option>
          </select>
        </div>

        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;