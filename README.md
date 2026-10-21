# Product Search App

A modern and responsive product search application built with React and Bootstrap as part of the InfozaTech Frontend Development Internship.

The application fetches products from a public REST API and allows users to search, filter, sort, and explore product information through a clean and responsive interface.

## Features

- Search products by name
- Filter products by category
- Filter products by minimum and maximum price
- Sort products by:
  - Price: Low to High
  - Price: High to Low
  - Name: A to Z
  - Name: Z to A
- View detailed product information
- Display product ratings and review counts
- Display discount and stock information
- Loading skeleton while products are being fetched
- Empty-result state when no products match the filters
- Responsive design for desktop, tablet, and mobile screens
- Reset filters functionality
- Dynamic category list generated from API data

## Technologies Used

- React
- JavaScript
- Bootstrap
- Axios
- HTML5
- CSS3
- Vite
- REST API

## API

Product data is fetched from the DummyJSON Products API:

`https://dummyjson.com/products?limit=0`

The application retrieves the complete available product collection and dynamically generates the product cards and category filters from the API response.

## Project Structure

```text
src/
├── components/
│   ├── FilterBar.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── ProductGrid.jsx
│   ├── ProductSkeleton.jsx
│   ├── ProductSkeletonGrid.jsx
│   └── SearchBar.jsx
│
├── services/
│   └── productApi.js
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx