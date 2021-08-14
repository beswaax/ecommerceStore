import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Container,
  Button,
  ButtonBase,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
// import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../assets/logo.svg";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  const [state, setState] = React.useState({ open: false });

  const content = {
    link1: "OUR MISSION",
    link2: "THE PRODUCTS",
    link3: "FEATURES",
    link4: "CONTACT",
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <ButtonBase
              disableRipple
              disableTouchRipple
              component={Link}
              to="/"
            >
              <img
                alt="Amazon Clone"
                height="25px"
                // className={classes.image}
                className={classes.brand}
                src={logo}
              />{" "}
            </ButtonBase>
            <div className={classes.button} style={{ marginLeft: "auto" }}>
              <IconButton
                disableRipple
                disableTouchRipple
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart style={{ fontSize: 30 }} />
                </Badge>
              </IconButton>
            </div>
            {/* {location.pathname === "/" && (
            )} */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
