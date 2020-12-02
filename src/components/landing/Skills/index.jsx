import React, { useContext } from 'react';
import { Container } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Grid, Item, Content } from './styles';
import { IconContext } from "react-icons"; 
import { SiJavascript, SiGithub, SiHtml5, SiCss3, SiGatsby, SiGnubash, SiReact, SiGit, SiMongodb, SiPython, SiBootstrap } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';

//Got to reformat this piece of code :s
export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="skills">
    <h2>Skills</h2>

    <Grid>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiHtml5 />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiCss3 />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiJavascript />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiReact />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <FaNode />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiMongodb />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiGatsby />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiBootstrap />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiPython />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiGnubash />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiGit />
      </IconContext.Provider>
    </Content>
    </Item>

    <Item theme={theme}>
    <Content>
      <IconContext.Provider value={{ size:"4em" }}>
          <SiGithub />
      </IconContext.Provider>
    </Content>
    </Item>

    </Grid>
    </Wrapper>
  )
}