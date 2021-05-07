import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import cx from 'clsx';
import React from 'react';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 450,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const Projects = function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <>
      <div>
        <Grid container>
          <Grid item md={4}>
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                className={styles.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline="28 MAR 2019"
                  heading="What is Git ?"
                  body="Git is a distributed version control system. Every dev has a working copy of the code and..."
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                className={styles.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline="28 MAR 2019"
                  heading="What is Git ?"
                  body="Git is a distributed version control system. Every dev has a working copy of the code and..."
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                className={styles.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline="28 MAR 2019"
                  heading="What is Git ?"
                  body="Git is a distributed version control system. Every dev has a working copy of the code and..."
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Projects;
