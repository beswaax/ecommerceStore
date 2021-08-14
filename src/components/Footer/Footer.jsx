import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  gridItem: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  footerLink: {
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[400],
    // "&:hover": {
    //   textDecoration: "none",
    // },
  },
  footerLinkalt: {
    color: theme.palette.grey[400],
  },
  footerCopy: {
    borderTop: "1px solid grey",
    borderTopStyle: "solid",
  },
  copy: {
    color: theme.palette.grey[400],
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  icon: {
    marginRight: "0.3rem",
    color: theme.palette.grey[300],
  },
  icons: {
    color: theme.palette.grey[400],
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  footer: {
    backgroundColor: theme.palette.footerAndNav,
  },
  title: {
    color: theme.palette.common.white,
  },
  anchor: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const content = {
    brand: { image: "/assets/logo1/vector/default-monochrome.svg", width: 250 },
    copy: "© 2021 Lonnarigo & Company CPAs. All rights reserved.",
    header1: "Services",
    header2: "Quick Links",
    link1: "About",
    link2: "Careers",
    link3: "Terms of use",
    link4: "Privacy Policy",
    link5: "Corporate Tax",
    link6: "Personal Tax",
    link7: "E-Commerce Tax",
    link8: "Bookkeeping",
    email: "info@lonnarigocpa.com",
    fax: "647-287-3346",
    tel: "647-287-3346",
    address1: "195 Bedford Park Ave",
    address2: "Toronto ON",
    address3: "M5M 1J4",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box
          pt={6}
          pb={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Link href="/" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" ml="auto" className={classes.footerNav}>
            <Grid
              container
              direction={matchesXS ? "column" : "row"}
              justify={
                matchesXS ? "space-between" : matchesSM ? "center" : "inherit"
              }
              alignItems={
                matchesXS ? "space-between" : matchesSM ? "center" : "inherit"
              }
              spacing={2}
            >
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header1}
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="/services/5"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link5"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/services/4"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link6"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/services/3"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link7"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="services/2"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link8"]}
                  </Link>
                </Box>
              </Grid>{" "}
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header2}
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="/about"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link1"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="career"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link2"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/company-terms"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link3"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="/company-terms"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link4"]}
                  </Link>
                </Box>
              </Grid>{" "}
              <Grid
                item
                className={classes.gridItem}
                style={{ paddingTop: "0.9rem" }}
              >
                <Box pb={matchesSM ? 0.5 : matchesMD ? 1 : 2}>
                  <Typography variant="body2" className={classes.footerLinkalt}>
                    {content.address1}
                  </Typography>
                  <Typography variant="body2" className={classes.footerLinkalt}>
                    {content.address2}
                  </Typography>
                  <Typography variant="body2" className={classes.footerLinkalt}>
                    {content.address3}
                  </Typography>
                </Box>
                <Box>
                  <Grid container>
                    {/* <Grid item>
                      <EmailOutlined className={classes.icon} />
                    </Grid> */}
                    <Grid item>
                      <Typography
                        variant="body2"
                        className={classes.footerLinkalt}
                      >
                        {content.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container>
                    {/* <Grid item>
                      <PhoneOutlined className={classes.icon} />
                    </Grid> */}
                    <Grid item>
                      <Typography
                        className={classes.footerLinkalt}
                        variant="body2"
                      >
                        {content.tel}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          pt={1}
          pb={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.footerCopy}
        >
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
            className={classes.copy}
          >
            {content["copy"]}
          </Typography>
          <Box ml="auto" className={classes.icons}>
            <Typography
              color="textSecondary"
              component="p"
              variant="caption"
              gutterBottom={false}
              className={classes.copy}
            >
              Made with love by{" "}
              <a
                className={classes.anchor}
                target="_blank"
                href="https://rangojango.com/"
              >
                RangoJango
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
