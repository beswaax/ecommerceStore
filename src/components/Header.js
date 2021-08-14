import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  imageBox: {
    [theme.breakpoints.up("md")]: {
      marginBottom: "-350px",
    },
  },
  img: {
    maxWidth: "100%",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Donec lacinia",
    "header-p2": "turpis non sapien lobortis pretium",
    description:
      "Integer feugiat massa sapien, vitae tristique metus suscipit nec.",
    "primary-action": "Action",
    "secondary-action": "Link Default",
    pattern: "nereus-assets/img/bg/pattern1.png",
    image:
      "https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ...props.content,
  };

  return (
    <section
      className={classes.section}
      style={{ backgroundImage: `url("${content["pattern"]}")` }}
    >
      <Container maxWidth="md">
        <Box pt={8} pb={6} textAlign="center" overflow="hidden">
          <Container maxWidth="sm">
            <Typography variant="h3" component="h2" gutterBottom={true}>
              <Typography variant="h3" component="span" color="primary">
                {content["header-p1"]}{" "}
              </Typography>
              <Typography variant="h3" component="span">
                {content["header-p2"]}
              </Typography>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {content["description"]}
            </Typography>
            <Box mt={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.primaryAction}
              >
                {content["primary-action"]}
              </Button>
              <Link href="#">{content["secondary-action"]}</Link>
            </Box>
          </Container>
          <Box mt={5} className={classes.imageBox}>
            <img src={content["image"]} alt="" className={classes.img} />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
