import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {Link} from 'react-router-dom';
export default function EditRecordPage() {
  useProtectedPage()
  return (
    <div>endereço
      
    <Link to='/login'>Login</Link>

    </div>
  )
}

