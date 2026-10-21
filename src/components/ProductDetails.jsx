function ProductDetails({ product, onBack }) {
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  return (
    <section className="product-details container">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={onBack}
      >
        ← Back to Products
      </button>

      <div className="row g-5">
        <div className="col-md-6">
          <div className="details-image-container">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="details-image"
            />
          </div>
        </div>

        <div className="col-md-6">
          <span className="product-category">
            {product.category}
          </span>

          <h1 className="details-title">
            {product.title}
          </h1>

          <div className="product-rating mb-3">
            <span className="star">★</span>
            <strong>{product.rating}</strong>
            <span className="review-count">
              ({product.reviews?.length || 0} reviews)
            </span>
          </div>

          <div className="price-section mb-3">
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
            <p>
              <strong>Brand:</strong> {product.brand || "N/A"}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

            <p>
              <strong>Discount:</strong>{" "}
              {product.discountPercentage.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;