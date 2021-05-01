import { useState } from 'react'

export const Input = ({inputClass, onChange, label, ...rest}) => {
  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    const inputValue = e.target.value

    setValue(inputValue)
    if (onChange) onChange(inputValue)
  }

  return (
    <>
      {label && <label>{label}</label>}
      <input
        type="text"
        className={inputClass}
        value={value}
        onChange={e => handleInputChange(e)}
        {...rest}
      />
    </>
  )
}
