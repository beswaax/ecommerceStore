import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { Box, ThemeProvider } from "@material-ui/core/";
import theme from "../src/theme/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const handleAddToCart = async (productId, quantity) => {
    //the api will send back the whole cart in item
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    //it will send back the whole updated cart in response
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div style={{ margin: 0 }}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Navbar totalItems={cart.total_items} />

            <Switch>
              <Route exact path="/">
                <Box py={8}>
                  <Products products={products} onAddToCart={handleAddToCart} />
                </Box>
              </Route>
              <Route exact path="/cart">
                <Cart
                  cart={cart}
                  handleEmptyCart={handleEmptyCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              </Route>
              <Route exact path="/checkout">
                <Checkout
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                  handleEmptyCart={handleEmptyCart}
                  cart={cart}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
