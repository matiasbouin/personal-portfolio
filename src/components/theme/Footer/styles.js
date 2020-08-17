import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

//ESTO ESTA EDITADO: REFORMATEAR <<<<<<<<<<<<<
export const Links = styled.div`

  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin: 0 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#000')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }

  ${'' /* 
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  } */}
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: #212121;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
