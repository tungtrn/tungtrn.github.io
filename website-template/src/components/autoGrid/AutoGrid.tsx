import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
// import ImgMediaCard from '../imgMediaCard/ImgMediaCard';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    // marginLeft: '100px',
    // marginRight: '100px',
    marginBottom: '20px',
    textAlign: 'center',
    align: 'center',
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    align: 'center',
    color: theme.palette.text.secondary,
    marginBottom: '50px',
  },
  imageCell: {
    maxWidth: 350,
    maxHeight: 225,
    marginBottom: '20px',
    // border: { 0},
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4} alignItems="center" justify="center">
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
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
        </Grid>
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1487260211189-670c54da558d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="center" justify="center">
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1611351813901-1f3a7ad26566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1530764786044-f799b47b58f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1119&q=80"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="center" justify="center">
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1614534031442-d16d7706af86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=976&q=80"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1495045197504-5128e3c8469f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=960&q=80"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Box borderRadius="50%">
            <Card className={classes.imageCell} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="225"
                  image="https://images.unsplash.com/photo-1500004621732-74cd4ad4d53e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid> */}
    </div>
  );
}
