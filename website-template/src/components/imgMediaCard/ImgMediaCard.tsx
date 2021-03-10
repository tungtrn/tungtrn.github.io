import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    maxHeight: 225,
    // border: { 0},
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Box borderRadius="50%">
      <Card className={classes.root} elevation={0}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="225"
            image="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60"
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
}
