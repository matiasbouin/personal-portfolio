import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? 'lavender' : '#181717')};
  height: 100%;
  border-radius: 10px;
`;
