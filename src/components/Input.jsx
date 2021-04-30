import { useState } from 'react'

export const Input = ({inputClass, onChange}) => {
  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    const inputValue = e.target.value

    setValue(inputValue)
    onChange(inputValue)
  }

  return (
    <input
      type="text"
      className={inputClass}
      value={value}
      onChange={() => handleInputChange(e)}
    />
  )
}
