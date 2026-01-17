import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work with a wide range of modern and enterprise technologies across the full software development life cycle. My toolkit includes Microsoft .NET platforms, frontend JavaScript frameworks, cloud services, databases, 
      and CI/CD tools to build secure and scalable applications.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            AngularJS (1.x), Angular 2–16, ReactJS, Vue.js, TypeScript, JavaScript, HTML5,
            CSS3, Tailwind CSS, Bootstrap 4, Angular Material, jQuery, AJAX,
            Jasmine, Karma, Cypress, automated testing strategies
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced in architecting enterprise backend solutions using .NET Core, ASP.NET, Node.js, and REST APIs, with integration to SQL Server, Oracle, Firebase, Azure, and AWS. I deliver production-ready, maintainable, 
            and secure backend systems for complex applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            I use Figma, Adobe XD, and other design tools to translate ideas into interactive, visually appealing interfaces that are both functional and engaging.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
