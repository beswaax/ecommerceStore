import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#212121",
  },
  paper: {
    background: theme.palette.secondary.main,
    marginTop: 90,
  },

  toolbar: { toolbar: theme.mixins.toolbar, minHeight: 100 },
  brand: {
    lineHeight: 1,
    marginRight: "auto",
  },
  link: {
    marginRight: theme.spacing(4),
    color: [theme.palette.common.white],
    fontWeight: 300,
    fontFamily: "Signika",
    textDecoration: "none",
    borderBottom: "3px solid transparent",
    transition: "border-bottom 0.45s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      textDecoration: "none",
      borderBottom: "3px solid white",
    },
  },
  linkMenu: {
    color: [theme.palette.common.white],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },

  menuButton: {
    color: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 240,
  },
  listItem: {
    // backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    borderRadius: 1,
    color: theme.palette.common.white,
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
