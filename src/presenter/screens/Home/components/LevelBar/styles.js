import styled from 'styled-components';

// 
//  Level Bar Styles
// 

export const LevelBar = styled.div`
  margin-top: 5vh;
  width: 100%;
  height: 4px;

  background: var(--foreground--color);
  display: flex;
  position: relative;
`

export const LevelBarIndicator = styled.span`
  max-width: 100%;
  height: 4px;
  background: var(--green--color);

  position: absolute;
  transition: .7s ease;
`
