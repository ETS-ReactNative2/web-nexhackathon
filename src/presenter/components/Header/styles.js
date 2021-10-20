import styled from 'styled-components';

export const HeaderContent = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  box-shadow: var(--header-border-bottom);
  padding: var(--header-vertical-padding) var(--header-horizontal-padding);
  backdrop-filter: blur(5px);
  z-index: 1;
`

export const LogoImg = styled.img`
  width: 12em;
`

export const Actions = styled.div`
  display: flex;
`
