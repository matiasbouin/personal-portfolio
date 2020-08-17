import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

//>>>>>> ELIMINAR SOCIAL.JSON <<<<<<
import social from './social.json';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
  <Wrapper>
    <Flex as={Container} theme={theme}>
      <Details>
        <h2>Angel Matias Bouin</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} 
        </span>
      </Details>

      {/* >>>>>>>>>> AGREGAR LINKS A LINKEDIN Y GITHUB <<<<<<<<<<<< */}
      <Links theme={theme}>
        <div>
          <GitHubIcon/>
        </div>
        <div>
          <LinkedInIcon/>
        </div>
        {/* {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))} */}
      </Links>
    </Flex>
  </Wrapper>
)};
