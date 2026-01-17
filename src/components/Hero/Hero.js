import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I’m Muhammad Imran<br />
        </SectionTitle>
        <SectionText>
          Senior Full-Stack .NET Developer with 10+ years of experience building scalable, secure, and high-performance web applications using modern Microsoft and JavaScript technologies.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;