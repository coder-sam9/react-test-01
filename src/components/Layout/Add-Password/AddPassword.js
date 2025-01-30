import React from 'react'
import Modal from '../../UI/Modal/Modal'
import styles from './AddPassword.module.css'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

function AddPassword(props) {
    function onClose(params) {
        props.onClose()
    }
    function onAdd(params) {
        
    }
  return (
    <Modal>
        <div>

        <Input label='Title' id='title' placeholder='title' type='text' onChange={(value)=>console.log(value)
        }/>
        <Input label='Password' id='password' placeholder='password' type='text' onChange={(value)=>console.log(value)
        }/>
        </div>
        <div className={styles.actions}>
        <Button title="Close" onClick={onClose} isCancel={true} />
        <Button title="Add" onClick={onAdd} />
      </div>
    </Modal>
  )
}

export default AddPassword