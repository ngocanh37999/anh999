import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const StyledRegister = styled.div`
  width: 100%;
`
export const Container = styled.div`
  padding: 8rem;
`

export const FormWrapper = styled.div`
  max-width: 100%;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
  border-radius: 0.4rem;
  background-color: #fff;
  padding: 3.5rem 3rem 5rem;
`

export const FormTitle = styled.div`
  font-size: 20px;
  margin-bottom: 3rem;
  color: #222;
  text-transform: capitalize;
`

export const Form = styled.form``

export const FormControl = styled.div`
  margin-bottom: 2.5rem;
`

export const FormButton = styled.div`
  margin-bottom: 3rem;
  ${Button} {
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    background-color: #007bff;
  }
`

export const FormFooter = styled.div`
  text-align: center;
  span {
    margin-right: 1rem;
    color: rgba(0, 0, 0, 0.26);
  }
`
