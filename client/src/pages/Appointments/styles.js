import styled from 'styled-components'
import { Button } from '../../atoms'
import { laptop } from '../../assets/_breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: ${laptop}) {
    width: -webkit-fill-available;
  }
`

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #7D7987;
  z-index: 12;
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`

export const GoutElement = styled.div`
  position: absolute;
  left: -20%;
  top: 0%;
  bottom: 0%;
  z-index: 0;
  transform: rotate(22deg);
`

export const DotGridElement = styled.div`
  position: absolute;
  bottom: 25%;
  right: 10%;
  z-index: 0;
`

export const Card = styled.div`
  width: 200px;
  height: 200px;
  z-index: 10;
  padding: 16px;
  margin: 8px;
  background: #FFFFFF;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: ${laptop}) {
    margin: 4px;
    padding: 8px;
  }
`

export const WrapperButton = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 32px;
`

export const CreateButton = styled(Button)`
  width: 64px;
  height: 64px;
  font-size: 46px;
  border-radius: 50%;
  padding: 0px;
  outline: none;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  z-index: 10;

  > input {
    margin: 4px auto;
    width: -webkit-fill-available;
  }

  > div {
    margin: 4px auto;
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: 500;
  padding: 4px;
`