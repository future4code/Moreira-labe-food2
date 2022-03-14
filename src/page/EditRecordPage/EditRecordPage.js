import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const EditRecordPage = () => {
  useProtectedPage()
  return (
    <div>
      <p>EditRecordPage</p>
    </div>
  )
}

export default EditRecordPage