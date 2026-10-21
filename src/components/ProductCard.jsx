function ProductCard({ product, onViewDetails }) {
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />

        <span className="discount-badge">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-title">
          {product.title}
        </h3>

        <div className="product-rating">
          <span className="star">★</span>
          <strong>{product.rating}</strong>
          <span className="review-count">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        <div className="price-section">
          <span className="product-price">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="original-price">
            ${product.price}
          </span>
        </div>

        <div className="stock-status">
          {product.stock > 0
            ? `${product.stock} in stock`
            : "Out of stock"}
        </div>

        <button
          type="button"
          className="view-button"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </button>
      </div>
    </article>
  );
}

export default ProductCard;