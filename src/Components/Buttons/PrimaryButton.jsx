import React from 'react'

export default function PrimaryButton({id, type, disabled, children}) {
  return (
    <button className='btn-primary' id={id} type={type} disabled={disabled}>
        {children}
    </button>
  )
}
