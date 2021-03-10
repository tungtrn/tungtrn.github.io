import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../components/appbar/Appbar';
// import ImgMediaCard from '../components/imgMediaCard/ImgMediaCard';
import AutoGrid from '../components/autoGrid/AutoGrid';

// import Image from './pic1.jpg';

const styles = makeStyles(() => ({
  paperContainer: {
    // backgroundImage: 'url(website-template/src/download.png)',
    backgroundImage: 'url(https://images.unsplash.com/photo-1508624186387-bbddd1513a0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1953&q=80)',
    backgroundSize: 'cover',
    display: 'flex',
    height: '800px',
    // backgroundColor: '#f222',
    // maxHeight: '200px',
  },
  textPadding: {
    paddingLeft: '200px',
    paddingTop: '200px',
    paddingBottom: '60px',
    fontSize: '60px',
    fontFamily: 'Raleway',
  },
  blankSpace: {
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  centerContainer: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    color: '#f222',
    align: 'center',
  },
  paper: {
    // display: 'flex',
    // flexWrap: 'wrap',
    paddingBottom: '100px',
    height: '600px',
    padding: '120px',
    backgroundImage: 'url(https://images.unsplash.com/photo-1488109811119-98431feb6929?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80)',
  },
}));

const Index = () => {
  const a = 'null';

  return (
    <>
      <div className={a}>
        <ButtonAppBar />
      </div>
      <div className={styles().paperContainer}>
        <div className={styles().textPadding}>
          hello, i&#39;m
          {/* <Typography> */}
          <Box fontWeight="fontWeightBold" fontSize="60px" paddingBottom="20px" paddingTop="20px">
            Khanh Dang Heo
          </Box>
          a data
          {/* </Typography> */}
        </div>
      </div>
      <div className={styles().blankSpace}>
        <br />
      </div>
      <Typography align="center">
        {/* <div className={styles().centerContainer}> */}
        <Box fontWeight="fontWeightLight" fontSize="40px">
          My Portfolios
        </Box>
      </Typography>

      <Typography align="center">
        <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="20px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Box>
      </Typography>

      <AutoGrid />
      {/* <AutoGrid />
      <AutoGrid /> */}

      <div className={styles().blankSpace}>
        <br />
      </div>

      <Paper className={styles().paper} elevation={0}>
        <Typography align="center">
          <Box fontWeight="fontWeightLight" fontSize="40px">
            My Services
          </Box>
        </Typography>
        <br />
        <Typography align="center">
          <Box fontWeight="fontWeightLight" fontSize="18px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Box>
        </Typography>
        <Typography align="center">
          <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="60px">
            Lorem ipsum, dolor sit.
          </Box>
        </Typography>

        <Grid container spacing={4} alignItems="center" justify="center">
          <Grid item xs={3} sm={4}>
            <Typography align="left">
              <Box fontWeight="fontWeightBold" fontSize="24px">
                WEB DESIGN
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="60px">
                There are many variations of passages of Ipsum available, but the majority
                have suffered alteration in some form,
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightBold" fontSize="24px">
                WEB DESIGN
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="60px">
                There are many variations of passages of Ipsum available, but the majority
                have suffered alteration in some form,
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightBold" fontSize="24px">
                WEB DESIGN
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="60px">
                There are many variations of passages of Ipsum available, but the majority
                have suffered alteration in some form,
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={3} sm={4}>
            <Typography align="left">
              <Box fontWeight="fontWeightBold" fontSize="24px">
                PHOTOGRAPHY
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="60px">
                There are many variations of passages of Ipsum available, but the majority
                have suffered alteration in some form,
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightBold" fontSize="24px">
                PHOTOGRAPHY
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="60px">
                There are many variations of passages of Ipsum available, but the majority
                have suffered alteration in some form,
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightBold" fontSize="24px">
                PHOTOGRAPHY
              </Box>
            </Typography>
            <Typography align="left">
              <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="60px">
                There are many variations of passages of Ipsum available, but the majority
                have suffered alteration in some form,
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <div className={styles().blankSpace}>
        <br />
      </div>
      <Typography align="center">
        {/* <div className={styles().centerContainer}> */}
        <Box fontWeight="fontWeightLight" fontSize="40px">
          Create Team
        </Box>
      </Typography>

      <Typography align="center">
        <Box fontWeight="fontWeightLight" fontSize="18px" paddingBottom="20px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Box>
      </Typography>
    </>
  );
};
export default Index;
