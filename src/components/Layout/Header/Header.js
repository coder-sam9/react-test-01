import React, { useContext } from 'react'
import styles from './Header.module.css'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import PasswordContext from '../../store/password-context'

function Header({onAdd,onSearch}) {
    const input={
        placeholder:'Search', type:'text' ,id:'search',label:'Search'
    ,  }
    function AddNew(params) {
        onAdd()
    }
    const handleSearchInput=(value)=>{
        onSearch(value);
    }
    const passwordCtx=useContext(PasswordContext);
  return (
    <header className={styles.header}>
        <h2>Password Keeper</h2>
        <p>Total Passwords: {passwordCtx.totalPasswords.length}</p>
        <Button title='Add new password' onClick={AddNew}/>
            <Input input={input} label={'Search'} type={'text'} id='search' placeholder='Search' onChange={handleSearchInput}/>
    </header>
  )
}

export default Header