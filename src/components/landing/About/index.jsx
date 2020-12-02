import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I'm a web developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I'm a 23 year old Informatics student and software developer based in Capital Federal, Argentina, currently on the hunt 
            for job opportunities within the IT field! If you want to know more about me, my stack or what I can do, do not hesitate to contact 
            me through the contact form below and I'll get back to you!
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
