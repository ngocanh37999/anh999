import * as S from './checkbox.style'
type CheckboxProps = {
  onChange: any
  checked: boolean
}
export default function Checkbox({
  onChange,
  checked,
  ...props
}: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    onChange && onChange(value)
  }
  return (
    <S.Checkbox>
      <S.CheckboxInput
        style={{ display: 'none' }}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        {...props}
      />
      <S.CheckboxBox />
    </S.Checkbox>
  )
}
