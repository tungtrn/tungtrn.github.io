import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
  jumpbotron: {
    minHeight: '100vh',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '0px',
    background: '#FFFFFF',
    fontWeight: 400,
    color: '#272341',
    padding: '0rem 5.6rem',
    marginBottom: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  heroTitle: {
    fontSize: '5.6rem',
    fontWeight: 700,
    marginBottom: '3.2rem',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  cta: {
    display: 'flex',
  },
  mainName: {
    fontSize: '5.6rem',
    fontWeight: 700,
    display: 'inline-block',
  },
  btn: {
    transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 1s',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: 'rgb(62, 73, 157)',
      border: '1px solid rgb(62, 73, 157)',
    },
  },
}));

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const classes = useStyles();

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className={classes.jumpbotron}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className={classes.heroTitle}>
            Hi, my name is
            <Typography color="primary" variant="h1" className={classes.mainName}>
              Tung Tran
            </Typography>
            <br />
            I&apos;m the Software Developer.
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Button variant="outlined" color="primary" className={classes.btn}>
            <Link to="about" smooth duration={1000} onClick={preventDefault}>
              <Typography variant="h6">
                Know More
              </Typography>
            </Link>
          </Button>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
