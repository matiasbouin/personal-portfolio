import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 8fr;
  grid-gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  margin: auto;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;