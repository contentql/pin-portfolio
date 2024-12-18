'use client'

import { useField } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'

const ColorField = ({ ...props }: TextFieldClientProps) => {
  const { value = '', setValue } = useField<string>({ path: props.path })
  const label = typeof props.field.label === 'string' ? props.field.label : ''

  console.log({ value }, props)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem',
      }}>
      <input
        id={props.path}
        type='color'
        value={value?.startsWith('#') ? value : `#${value}`}
        onChange={e => {
          const newValue = e.target.value
          setValue(newValue?.startsWith('#') ? newValue : `#${newValue}`)
        }}
      />
      <label htmlFor={props.path}>{label}</label>
    </div>
  )
}

export default ColorField
