import { ChangeEvent, FocusEvent } from 'react'
type BaseInputNumberProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement> | string) => void
  value: string | number
  onBlur?: (e: FocusEvent<HTMLInputElement, Element> | string) => void
}
export default function BaseInputNumber({
  onChange,
  value,
  onBlur,
  ...props
}: BaseInputNumberProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if ((/^\d+$/.test(val) || val === '') && onChange) {
      onChange(val)
    }
  }
  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    const val = e.target.value
    onBlur && onBlur(val)
  }
  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      onBlur={handleBlur}
      {...props}
    />
  )
}
