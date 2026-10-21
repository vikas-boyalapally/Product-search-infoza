function ProductDetails({ product, onBack }) {
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  return (
    <section className="product-details page-container">
      <button
        type="button"
        className="back-button"
        onClick={onBack}
      >
        ← Back to Products
      </button>

      <div className="details-layout">
        {/* Product Image */}
        <div className="details-image-container">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="details-image"
          />

          <span className="details-discount">
            -{Math.round(product.discountPercentage)}%
          </span>
        </div>

        {/* Product Information */}
        <div className="details-content">
          <span className="product-category">
            {product.category}
          </span>

          <h1 className="details-title">
            {product.title}
          </h1>

          <div className="product-rating">
            <span className="star">★</span>
            <strong>{product.rating}</strong>

            <span className="review-count">
              ({product.reviews?.length || 0} reviews)
            </span>
          </div>

          <div className="details-price-section">
            <span className="details-price">
              ${discountedPrice.toFixed(2)}
            </span>

            <span className="original-price">
              ${product.price}
            </span>
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <div className="details-info">
            <div className="details-info-row">
              <span>Brand</span>
              <strong>{product.brand || "N/A"}</strong>
            </div>

            <div className="details-info-row">
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div className="details-info-row">
              <span>Stock</span>
              <strong>
                {product.stock > 0
                  ? `${product.stock} available`
                  : "Out of stock"}
              </strong>
            </div>

            <div className="details-info-row">
              <span>Discount</span>
              <strong>
                {product.discountPercentage.toFixed(1)}%
              </strong>
            </div>
          </div>

          <div className="details-actions">
            <button
              type="button"
              className="details-primary-button"
              onClick={onBack}
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;