import React from 'react'
import styles from './Header.module.css'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'

function Header({onAdd}) {
    const input={
        placeholder:'Search', type:'text' ,id:'search',label:'Search'
    ,  }
    function AddNew(params) {
        onAdd()
    }
  return (
    <header className={styles.header}>
        <h2>Password Keeper</h2>
        <p>Total Passwords: 1</p>
        <Button title='Add new password' onClick={AddNew}/>
            <Input input={input} label={'Search'} type={'text'} id='search' placeholder='Search'/>
    </header>
  )
}

export default Header