import React from 'react'

export default function PrimaryButton({id, type, disabled, children, onClick}) {
  return (
    <button className='btn-primary' id={id} type={type} disabled={disabled} onClick={onClick}>
        {children}
    </button>
  )
}
