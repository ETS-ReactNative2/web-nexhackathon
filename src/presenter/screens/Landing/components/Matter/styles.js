import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PathLine = styled.span`
  width: 1px;
  height: 189px;
  background: linear-gradient(171.07deg, #020E17 2.04%, #2FDF84 93.21%);
  display: flex;
`

export const Circle = styled.span`
  display: flex;
  border-radius: 100%;
  background: linear-gradient(270deg, #2FDF84 0%, rgba(0, 184, 113, 0.74) 100%);
  width: 34px;
  height: 34px;
`

export const MatterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5vh 0;
`

export const ContentTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2rem;
`

export const ContentDecription = styled.p`
  text-align: center;
  color: var(--gray--color);
  font-weight: 300;
  font-size: 15px;
  max-width: 300px;
`

