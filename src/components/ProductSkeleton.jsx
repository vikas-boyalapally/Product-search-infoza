function ProductSkeleton() {
  return (
    <div className="product-skeleton">
      <div className="skeleton-image"></div>

      <div className="skeleton-content">
        <div className="skeleton-line skeleton-category"></div>

        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-title short"></div>

        <div className="skeleton-line skeleton-rating"></div>

        <div className="skeleton-line skeleton-price"></div>

        <div className="skeleton-line skeleton-stock"></div>

        <div className="skeleton-button"></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;