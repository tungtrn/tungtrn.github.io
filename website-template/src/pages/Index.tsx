import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import School from '@material-ui/icons/School';
import React from 'react';

import pic1 from './pic1.jpg';

const useStyles = makeStyles(theme => ({
  outerRoot: {
    transition: 'all .15s ease',
    opacity: '.9',
    background:
      'linear-gradient(87deg, #172b4d, #1a174d)!important',
  },
  cardRoot: {
    // boxShadow: `${boxShadows.boxShadow + '!important',
    border: '0!important',
  },
  cardRootSecondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  cardHeaderRoot: {
    backgroundColor: '#FFFFFF !important',
  },
  containerRoot: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '39px',
      paddingRight: '39px',
    },
    zIndex: 1,
    paddingTop: '10%',
    paddingBottom: '5%',
    // marginTop: '-6rem',
  },
  gridItemRoot: {
    [theme.breakpoints.up('xl')]: {
      marginBottom: '0!important',
    },
  },
  typographyRootH6: {
    textTransform: 'uppercase',
  },
  plLg4: {
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '1.5rem',
    },
  },
  ptMd4: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: '1.5rem!important',
    },
  },
  mtMd5: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: '3rem!important',
    },
  },
  cardHeaderRootProfile: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '1.5rem!important',
      paddingTop: '1.5rem!important',
    },
  },
  buttonRootInfo: {
    color: '#FFFFFF',
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
  buttonRootDark: {
    color: '#FFFFFF',
    backgroundColor: '#172b4d',
    '&:hover': {
      backgroundColor: '#0b1526',
    },
  },
  profileImage: {
    verticalAlign: 'middle',
    borderStyle: 'none',
    transform: 'translate(-50%,-30%)',
    transition: 'all .15s ease',
    width: '100px',
    height: '100px',
    borderRadius: '80%',
    position: 'absolute',
    left: '50%',
  },
  cardProfileLink: {
    color: theme.palette.primary.main,
    backgroundColor: 'initial',
    textDecoration: 'none',
    fontSize: '1rem',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  order1: {
    [theme.breakpoints.down('lg')]: {
      order: '1!important',
    },
  },
  order2: {
    [theme.breakpoints.down('lg')]: {
      order: '2!important',
    },
  },
  marginBottomXl0: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: '0!important',
    },
  },
  order1XmarginBottomXl0: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: '0!important',
    },
    [theme.breakpoints.down('lg')]: {
      order: '1!important',
    },
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <>
      <Container
        className={classes.outerRoot}
        maxWidth={false}
      >
        <Container
          maxWidth={false}
          classes={{ root: classes.containerRoot }}
        >
          <Box component={Grid} justifyContent="center">
            <Grid item xs={12}>
              <Box position="relative">
                <Avatar src={pic1} className={classes.profileImage} />
              </Box>
            </Grid>
          </Box>
          <Grid container>
            <Grid
              item
              xs={12}
              component={Box}
              marginBottom="3rem!important"
              classes={{
                root: classes.order1XmarginBottomXl0,
              }}
            >
              <Card
                classes={{
                  root: classes.cardRoot,
                }}
              >
                <Box
                  component={CardHeader}
                  border="0!important"
                  textAlign="center"
                  paddingBottom="0!important"
                  paddingTop="8rem!important"
                  className={classes.cardHeaderRootProfile}
                >
                  <Box display="flex" justifyContent="space-between">
                    <Button
                      variant="contained"
                      size="small"
                      classes={{ root: classes.buttonRootInfo }}
                    >
                      Connect
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      classes={{ root: classes.buttonRootDark }}
                    >
                      Message
                    </Button>
                  </Box>
                </Box>
                <Box
                  component={CardContent}
                  className={classes.ptMd4}
                  paddingTop="0!important"
                >
                  <Grid container>
                    <Grid item xs={12}>
                      {/* <Box
                        padding="1rem 0"
                        justifyContent="center"
                        display="flex"
                        className={classes.mtMd5}
                      >
                        <Box
                          textAlign="center"
                          marginRight="1rem"
                          padding=".875rem"
                        >
                          <Box
                            component="span"
                            fontSize="1.1rem"
                            fontWeight="700"
                            display="block"
                            letterSpacing=".025em"
                            className={classes.typographyRootH6}
                          >
                            22
                          </Box>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color="#adb5bd"
                          >
                            Friends
                          </Box>
                        </Box>
                        <Box
                          textAlign="center"
                          marginRight="1rem"
                          padding=".875rem"
                        >
                          <Box
                            component="span"
                            fontSize="1.1rem"
                            fontWeight="700"
                            display="block"
                            letterSpacing=".025em"
                            className={classes.typographyRootH6}
                          >
                            10
                          </Box>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color="#adb5bd"
                          >
                            Photos
                          </Box>
                        </Box>
                        <Box textAlign="center" padding=".875rem">
                          <Box
                            component="span"
                            fontSize="1.1rem"
                            fontWeight="700"
                            display="block"
                            letterSpacing=".025em"
                            className={classes.typographyRootH6}
                          >
                            89
                          </Box>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color="#adb5bd"
                          >
                            Comments
                          </Box>
                        </Box>
                      </Box> */}
                    </Grid>
                  </Grid>
                  <Box textAlign="center">
                    <Typography variant="h3">
                      Tung Tran
                      {/* <Box component="span" fontWeight="300">
                        , 27
                      </Box> */}
                    </Typography>
                    <Box
                      fontWeight="300!important"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box
                        component={LocationOn}
                        width="1.25rem!important"
                        height="1.25rem!important"
                      />
                      <Typography variant="h5">
                        Philadelphia, PA
                      </Typography>
                    </Box>
                    <Box
                      marginTop="3rem!important"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box
                        component={School}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        marginRight=".5rem"
                      />
                      <Typography variant="h5">
                        Drexel University
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="1rem"
                    >
                      Sophomore in Computer Science
                    </Box>
                    <Box
                      component={Divider}
                      marginTop="1.5rem!important"
                      marginBottom="1.5rem!important"
                    />
                    <Box
                      component="p"
                      fontWeight="300"
                      lineHeight="1.7"
                      marginBottom="1rem"
                      fontSize="1rem"
                    >
                      I am passionate about innovating life by using data, new technology.
                      I have experience in software engineering, back-end/ database development,
                      web development
                    </Box>
                    {/* <a
                      href="#mui"
                      className={classes.cardProfileLink}
                      onClick={
                        e => e.preventDefault()
                      }
                    >
                      Show More
                    </a> */}
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Profile;
