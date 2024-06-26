import "./App.css";
import HeroHeader from "./Components/Headers/HeroHeader";
import Navbar from "./Components/Navbar/HeroNavbar";
import Tagline1 from "./Components/Taglines/Tagline1";
import Category from "./Components/Category/Category";
import Featured from "./Components/Products/Featured";
import Data from "./Database/Data";
import Products from "./Components/Products/Products";
import Cards from "./Components/Cards/Cards";
import BestSellers from "./Components/Products/BestSellers";
import ProductView from "./Components/Products/ProductView";
import { useEffect, useRef, useState } from "react";
import Wishlist from "./Components/Wishlist/Wishlist";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import CommonHeader from "./Components/Headers/CommonHeader";

import PageNotFound from "./Pages/PageNotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState(Data);
  const [likedProductsCodes, setLikedProductsCodes] = useState(() => {
    const likedCodes = localStorage.getItem("likedProductsCodes");
    return likedCodes ? JSON.parse(likedCodes) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProductsCodes, setCartProductsCodes] = useState(() => {
    const cartCodes = localStorage.getItem("cartProductsCodes");
    return cartCodes ? JSON.parse(cartCodes) : [];
  });

  const allCategories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  const filteredProducts = allProducts.filter((product) => {
    if (!selectedCategory) return product;
    return product.category === selectedCategory;
  });

  const filterFeaturedProducts = allProducts.filter(
    (product) => product.featured
  );

  const filterBestSellers = allProducts.filter((product) => product.bestSeller);

  function handleSelectedCategory(category) {
    setSelectedCategory(selectedCategory === category ? null : category);
  }

  function handleSelectedProduct(product) {
    setSelectedProduct((selectedProduct) => (selectedProduct = product));
  }

  function handleCartProductsCodes(cartProductCode) {
    if (cartProductsCodes.includes(cartProductCode)) {
      setCartProductsCodes(
        cartProductsCodes.filter(
          (productCode) => productCode !== cartProductCode
        )
      );
    } else
      setCartProductsCodes((cartProductsCodes) =>
        Array.from(new Set([...cartProductsCodes, cartProductCode]))
      );
  }

  function handleLikedProductsCodes(likedProductCode) {
    if (likedProductsCodes.includes(likedProductCode)) {
      setLikedProductsCodes(
        likedProductsCodes.filter(
          (productCode) => productCode !== likedProductCode
        )
      );
    } else
      setLikedProductsCodes((likedProductsCodes) =>
        Array.from(new Set([...likedProductsCodes, likedProductCode]))
      );
  }



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppLayout
                  filteredProducts={filterFeaturedProducts}
                  selectedCategory={selectedCategory}
                  onLikeProduct={handleLikedProductsCodes}
                  likedProductsCodes={likedProductsCodes}
                  onSelectProduct={handleSelectedProduct}
                >
                  <HeroHeader
                    likedProductsCodes={likedProductsCodes}
                    cartProductsCodes={cartProductsCodes}
                  />
                  <Navbar cartProductsCodes={cartProductsCodes} />
                  <Tagline1 />
                  <Category
                    allCategories={allCategories}
                    onSelectCategory={handleSelectedCategory}
                    selectedCategory={selectedCategory}
                  />
                </AppLayout>
              </>
            }
          >
            <Route
              path="products"
              element={
                <>
                  <Products selectedCategory={selectedCategory}>
                    <Cards
                      filteredProducts={filteredProducts}
                      onLikeProduct={handleLikedProductsCodes}
                      likedProductsCodes={likedProductsCodes}
                      onSelectProduct={handleSelectedProduct}
                    />
                  </Products>
                </>
              }
            />
            <Route
              path="products/:id"
              element={
                <ProductView
                  selectedProduct={selectedProduct}
                  onModifyCartProduct={handleCartProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
              }
            />
          </Route>
          <Route
            path="cart"
            element={
              <>
                <CommonHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <Cart
                  cartProductsCodes={cartProductsCodes}
                  allProducts={allProducts}
                  onModifyCartProduct={handleCartProductsCodes}
                ></Cart>
                <Footer />
              </>
            }
          />
          <Route
            path="wishlist"
            element={
              <>
                <CommonHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <Wishlist
                  likedProductsCodes={likedProductsCodes}
                  allProducts={allProducts}
                  onLikeProduct={handleLikedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                  onModifyCartProduct={handleCartProductsCodes}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/*"
            element={
              <>
                <CommonHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <PageNotFound />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
