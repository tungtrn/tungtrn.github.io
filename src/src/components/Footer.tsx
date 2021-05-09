import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-scroll';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(({
  icons: {
    margin: '1rem',
    fontSize: '35px',
    color: '#74787d',
  },
}));

const Connect = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Box
          marginBottom="1.5rem!important"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5">
            Lets Connect!
          </Typography>
        </Box>
        <Link href="https://github.com/tungtrn">
          <GitHubIcon className={classes.icons} />
        </Link>
        <Link href="https://www.linkedin.com/in/tungdavidtran/">
          <LinkedInIcon className={classes.icons} />
        </Link>
        <Link href="mailto:tungt1281@gmail.com">
          <MailIcon className={classes.icons} />
        </Link>
      </div>
    </>
  );
};

export default Connect;
