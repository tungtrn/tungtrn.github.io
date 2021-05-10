import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

const useStyles = makeStyles(({
  icons: {
    margin: '1rem',
    fontSize: '35px',
    color: '#74787d',
  },
  iconBtn: {
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
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
            Let&apos;s Connect!
          </Typography>
        </Box>
        <IconButton href="https://github.com/tungtrn" className={classes.iconBtn}>
          <GitHubIcon className={classes.icons} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/tungdavidtran/" className={classes.iconBtn}>
          <LinkedInIcon className={classes.icons} />
        </IconButton>
        <IconButton href="mailto:tungt1281@gmail.com" className={classes.iconBtn}>
          <MailIcon className={classes.icons} />
        </IconButton>
      </div>
    </>
  );
};

export default Connect;
