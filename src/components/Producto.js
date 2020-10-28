import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Uno from "../img/1.png";
import AgregarAlCarrito from "./AgregarAlCarrito";
const useStyles = makeStyles({
  root: {
    margin: 100,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Producto(props) {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Uno} title="React" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            DevOp
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            describe producto...
          </Typography>
        </CardContent>
      </CardActionArea>
    <AgregarAlCarrito/>
    
    </Card>

</>
  );
}
