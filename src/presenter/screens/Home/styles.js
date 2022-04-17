import styled, { keyframes } from 'styled-components';

const bounce = keyframes`{
  50% {
    transform: translateY(-50%);
  }
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 66px;
  padding: 5vh var(--container-horizontal-padding);

  display: flex;
  flex-direction: column;
`



// 
//  Missions Card Styles
// 

export const MissionsContent = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

export const MissionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const MissionsText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: var(--white--color);
  font-weight: 300;

  @media (max-width: 400px) {
    font-size: .9rem;
  }  
`

export const Bold = styled.span`
  font-weight: 600;
  margin: 0 5px;

  @media (max-width: 580px) {
    &:nth-child(1) {
      margin: 0;
      margin-right: 5px;
    }
  }  
`

export const MissionsMain = styled.div`
  width: 100%;
  margin: 20px 0 10vh 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  scroll-snap-type: x mandatory;


  @media (max-width: 1000px) {
    overflow-x: auto;
  }
`

export const ScrollDownIndcator = styled.div`
  position: relative;
  width: 100%;

  &:before {
  animation: ${bounce} 1s ease infinite;
  bottom: 1rem;
  color: #fff;
  content: '╲╱';
  font-size: 1.5rem;
  height: 1.5rem;
  left: 50%;
  letter-spacing: -1px;
  line-height: 4rem;
  margin-left: -3rem;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  width: 6rem;

  @media (max-width: 500px) {
    display: none;
    overflow: hidden;
  }
}
`

export const ShortcutsContent = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    display: none;
    overflow: hidden;
  }
`

export const ShortcutText = styled.h3`
  font-size: 1.5rem;
`

export const ShortcutMain = styled.div`
  margin-top: 10px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  scroll-snap-type: y mandatory;

  @media (max-width: 1000px) {
    overflow-x: auto;
  }
`

export const ShortcutItem = styled.button`
  width: 170px;
  height: 170px;
  padding: 1.5rem 3rem;
  cursor: pointer;
  background: var(--foreground--color);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  scroll-snap-align: start;
  
`

export const ShortcutIcon = styled.img`

`

export const ShortcutTitle = styled.p`
  margin-top: 10px;
  color: var(--dark-gray--color);
  font-size: 1rem;
`

// 
// Navigation Bar Styles
// 

export const NavgationBarContent = styled.div`
  width: 100%;
  padding: 15px var(--container-horizontal-padding); 
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #07131C;

  position: fixed;
  bottom: 0;

  @media (min-width: 500px) {
    display: none;
    overflow: hidden;
  }
`

export const NavigationBarItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
`

export const NavigationBarIcon = styled.img`
  width: 30px;
  margin-bottom: 5px;
`

export const NavigationBarTitle = styled.p`
  color: var(--white--color);
  font-size: .9rem;
`





