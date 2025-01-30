import React from 'react'
import PasswordContext from './password-context'

function PasswordProvider(props) {
    const intitialValues={

    }
  return (
  <PasswordContext.Provider value={intitialValues}>
{props.children}
  </PasswordContext.Provider> 
  )
}

export default PasswordProvider