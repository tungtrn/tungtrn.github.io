import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import cx from 'clsx';
import React from 'react';

import twomaway from '../asset/images/2maway.jpg';
import dataAnalysis from '../asset/images/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg';
import takeaway from '../asset/images/takeaway.png';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const Projects = function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <>
      <div>
        <Box
          marginBottom="3rem!important"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5">
            Projects
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid container item sm={12} md={4}>
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                classes={mediaStyles}
                image={dataAnalysis}
              />
              <CardContent className={styles.content}>
                <TextInfoContent
                  classes={textCardContentStyles}
                  overline="August 2020"
                  heading="Movie Data Analysis"
                  body="Jupyter Notebook implemented a database for searching movies on platforms, visualized relationships using graphs and perform predictions."
                />
                <Button variant="outlined" color="primary" fullWidth className={styles.cta} href="https://github.com/tungtrn/Movie-Data-Analysis">
                  Find Out More
                  <ChevronRightRounded />
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item sm={12} md={4}>
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                classes={mediaStyles}
                image={twomaway}
              />
              <CardContent className={styles.content}>
                <TextInfoContent
                  classes={textCardContentStyles}
                  overline="May 2020"
                  heading="2MAway"
                  body="A website to monitor user's location, report health status, search, and
                  get alerted about highly crowded destinations to prevent the spread of COVID-19."
                />
                <Button variant="outlined" color="primary" fullWidth className={styles.cta} href="https://github.com/nhd36/HackaMap">
                  Find Out More
                  <ChevronRightRounded />
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item sm={12} md={4}>
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                classes={mediaStyles}
                image={takeaway}
              />
              <CardContent className={styles.content}>
                <TextInfoContent
                  classes={textCardContentStyles}
                  overline="In Progress"
                  heading="Takeaway"
                  body="Cross-platform application to order items in advance to pick up at store,
                  check/ reserve seats at a particular restaurant with web version for stores."
                />
                <Button variant="outlined" color="primary" fullWidth className={styles.cta} disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Projects;
