import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function Header() {
  const content = {
    badge: 'The New Internet',
    header: 'We\'ve built a decentralized internet where information is totally free',
    'primary-action': 'Read more',
  };

  return (
    <section>
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Typography variant="overline" component="span">{content.badge}</Typography>
          <Typography variant="h3" component="h2">{content.header}</Typography>
          <Box mt={4}>
            <Button color="primary" endIcon={<ArrowRightAltIcon />}>{content['primary-action']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
