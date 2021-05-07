import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import React from 'react';

function Experience() {
  return (
    <Timeline lineColor="#ddd">
      <TimelineItem
        key="001"
        dateText="1/2021 – Present"
        dateInnerStyle={{ background: '#61b8ff' }}
        style={{ color: '#61b8ff' }}
      >
        <h3>Software Developer, UNICEF</h3>
        <h4>Remote</h4>
        <p>
          Working on a project to create an assistive technology application
          for young children with complex communication needs who otherwise may
          be left out of early childhood education services.
        </p>
        <p>
          Building cross-platform application using Flutter, Dart, and Node.Js
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="09/2020 – 04/2021"
        dateInnerStyle={{ background: 'rgb(169, 201, 74)' }}
        style={{ color: 'rgb(169, 201, 74)' }}
      >
        <h3>Software Engineer Intern, Katalon</h3>
        <h4>Ho Chi Minh, Vietnam</h4>
        <p>
          Built React web application using Typescript, Kotlin
        </p>
        <p>
          Worked with different CRM platforms and built business automation
          solution on Salesforce using Apex
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="11/2019 – 10/2020"
        dateInnerStyle={{ background: 'rgb(211, 90, 44)' }}
        style={{ color: 'rgb(211, 90, 44)' }}
      >
        <h3>Information Technology Intern, Outland Analytics</h3>
        <h4>Philadelphia, PA</h4>
        <p>
          Collaborated with the software team to develop/ maintain back-end infrastructure
          using Java, Python, including API, database, and user-
          interface design & construction
        </p>
        <p>
          Built map data using GIS tools, including ArcGIS.
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default Experience;
