import React, { useContext, preventDefault } from 'react';
// import { useStaticQuery, graphql } from 'gatsby'; //VER, CREO QUE NO LO NECESITO
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
//RECORDAR BORRAR CARPETA ICONS SI NO LOS USAS!!!!!!
// import Star from 'components/common/Icons/Star'; //NO LO NECESITO
// import Fork from 'components/common/Icons/Fork'; //NO LO NECESITO
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Wrapper, Grid, Item, Content, Stats } from './styles'; 
import proyects from './proyects.json';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
    {proyects.map(({ id, name, description, link, github }) => (
    <Item theme={theme} key={id}> 
      <Card theme={theme}>
        <Content>
        <h4>{name}</h4>
        <p>{description}</p>
        </Content>
        <Stats theme={theme}>
        <div>
        <Link href={link} onClick={preventDefault} target="_blank" rel="noopener noreferrer">
        <LinkIcon/>
        </Link>
        </div>
        <div>
        <Link href={github} onClick={preventDefault} target="_blank" rel="noopener noreferrer">
        <GitHubIcon/>
        </Link>
        </div>
        </Stats>
      </Card>
    </Item>
    ))}
    </Grid>
    </Wrapper>
  
//   return (
//     <Wrapper as={Container} id="projects">
//       <h2>Projects</h2>
//       <Grid>
//         {edges.map(({ node }) => (
//           <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
//             <Card theme={theme}>
//               <Content>
//                 <h4>{node.name}</h4>
//                 <p>{node.description}</p>
//               </Content>
//               <Stats theme={theme}>
//                 <div>
//                   <Star color={theme === 'light' ? '#000' : '#fff'} />
//                   <span>{node.stargazers.totalCount}</span>
//                 </div>
//                 <div>
//                   <Fork color={theme === 'light' ? '#000' : '#fff'} />
//                   <span>{node.forkCount}</span>
//                 </div>
//               </Stats>
//             </Card>
//           </Item>
//         ))}
//       </Grid>
//     </Wrapper>
//   );
)};
