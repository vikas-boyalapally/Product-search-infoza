import ProductSkeleton from "./ProductSkeleton";

function ProductSkeletonGrid() {
  return (
    <div className="product-grid">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}

export default ProductSkeletonGrid;