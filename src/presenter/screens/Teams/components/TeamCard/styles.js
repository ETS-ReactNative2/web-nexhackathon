import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 35vh;
  padding: 15px 20px;
  border-radius: 5px;
  background: #111c25;

  @media (max-width: 788px) {
    height: 40vh;
  }

  @media (max-width: 370px) {
    height: 47vh;
  }

  @media (max-width: 320px) {
    height: 52vh;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TeamCount = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  background: #1d2830;

  color: var(--white--color);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
`
export const UsersImages = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;

  position: relative;

  &:not(:last-child) {
    margin-right: -10px;
  }
`
export const Content = styled.div`
  margin-top: 20px;
`

export const Title = styled.h3`
  color: var(--white--color);
  font-size: 1.3rem;
  font-weight: 600;
`

export const Description = styled.p`
  margin-top: 10px;

  color: var(--gray--color);
  font-size: .9rem;
  font-weight: 300;
`

