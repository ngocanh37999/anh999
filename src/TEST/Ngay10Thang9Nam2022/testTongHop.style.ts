import { ChangeEvent, FocusEvent } from 'react'
import BaseInputNumber from 'src/components/BaseInputNumber/BaseInputNumber'
import styled from 'styled-components'

type BaseInputNumberProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement> | string) => void
  value: string | number
  onBlur?: (e: FocusEvent<HTMLInputElement> | string) => void
}
export const Input = styled(BaseInputNumber)<BaseInputNumberProps>``
