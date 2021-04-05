import 'react-vertical-timeline-component/style.min.css';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import ButtonAppBar from '../components/appbar/Appbar';
import AutoGrid from '../components/autoGrid/AutoGrid';

// import ImgMediaCard from '../components/imgMediaCard/ImgMediaCard';
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
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};
export default Index;
