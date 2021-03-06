import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cartContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            disableRipple
            disableTouchRipple
            type="button"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            size="small"
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            disableRipple
            disableTouchRipple
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          disableRipple
          disableTouchRipple
          onClick={() => onRemoveFromCart(item.id)}
          variant="contained"
          type="button"
          color="primary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
