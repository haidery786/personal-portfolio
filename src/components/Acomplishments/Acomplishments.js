import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'PGD in Teaching', year: '2015 – 2017'},
  { text: 'MSc in Computing', year: '2009 – 2011'},
  { text: 'BSc Computer Science', year: '2001` – 2003'},
  { text: 'A Level Maths, Physics', year: '2000 – 2001'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.text}`}</BoxNum>
          <BoxText>{card.year}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
