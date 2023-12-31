import { colors } from "@/app/assets/styles/global";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 48px;
  margin-bottom: 48px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Slogan = styled.p`
  font-size: 16px;
  padding-top: 8px;
  margin-bottom: 2rem;
  color: ${colors.gray};
`
export const MenuFooterContainer = styled.div`
  width: 100%;
  color: ${colors.gray};
  font-size: 14px;
`

export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1200px) {
    padding-left: 2rem;

  }

  @media (max-width: 580px) {
      padding-left: 2rem;
      gap: 2rem;
      text-align: center;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }

  li {
    &:hover {
      color: ${colors.primary};
    }
  }

  span {
    padding-bottom: 1rem;
    color: ${colors.primary};
    font-weight: 600;
  }
`

export const MenuSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 580px) {
    justify-content: center;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray50};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: all 2ms ease;

  &:hover {
    background-color: ${colors.gray};
    color: ${colors.white};
  }

`

export const CopyrightContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  border-top: 1px solid #F2F4F8;  
`

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 580px) {
    align-items: flex-start;
    padding-left: 2rem;
    
    p + p {
      margin-top: 1rem;
    }
  }

  p {
    font-size: 14px;
    margin-top: 1.5rem;
    color: ${colors.gray};
  }

  span {
    color: ${colors.blue500};
  }
`
