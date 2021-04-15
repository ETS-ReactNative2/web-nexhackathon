import styled from 'styled-components';

// 
//  User Content Styles
// 

export const ProfileWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
`

export const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  background-position: center;
  background-size: cover;
`

export const Dot = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid var(--black--color);
  bottom: 1px;
  right: 1px;
  position: absolute;

  background: var(--green--color);
`

export const ProfileText = styled.div`
  margin-left: 20px;
`

export const Text = styled.h3`
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 600;
`
