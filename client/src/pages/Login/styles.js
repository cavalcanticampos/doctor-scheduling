import styled from 'styled-components'
import logo from "../../assets/images/logotype.png"
import { laptop } from '../../assets/_breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 32px auto;
  padding: 32px;
  
  @media (max-width: ${laptop}) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > input {
    margin: 8px;
  }
`

export const RegisterButton = styled.button`
  background: none;
  border: none;
  font-size: initial;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`

export const HeroSection = styled.div`
  display: flex;
  margin: auto;

  @media (max-width: ${laptop}) {
    display: none
  }
`

export const Logo = styled.div`
  display: flex;
  margin: 0 auto;
  background: url(${logo});
`