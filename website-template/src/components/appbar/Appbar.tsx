import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',

  },
  menuButton: {
    marginRight: theme.spacing(20),
  },
  title: {
    flexGrow: 10,
    fontFamily: 'Helvetica',
  },
  nameButton: {
    justify: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
    justifyContent: 'center',
    align: 'center',
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton}
           color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            KHANH
          </Typography>
          <Container maxWidth="lg" className={classes.nameButton}>
            <Button color="inherit">ABOUT ME</Button>
            <Button color="inherit">BLOG</Button>
            <Button color="inherit">CONTACT</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
