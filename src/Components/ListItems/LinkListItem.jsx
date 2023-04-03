import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkListItem({path, children}) {
  return (
    <Link to={path}>
        <li>{children}</li>
    </Link>
  )
}
