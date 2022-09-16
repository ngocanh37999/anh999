import { ChangeEvent, FocusEvent } from 'react'

type BaseInputNumberProps = {
  // onChange: () => void
  onChange?: (e: ChangeEvent<HTMLInputElement> | string) => void
  value: string | number
  onBlur?: (e: FocusEvent<HTMLInputElement> | string) => void
}

export default function BaseInputNumber({
  onChange,
  value,
  onBlur,
  ...props
}: BaseInputNumberProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    if ((/^\d+$/.test(val) || val === '') && onChange) {
      onChange(val)
    }
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const val = event.target.value
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
