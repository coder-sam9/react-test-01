import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../../UI/Modal/Modal'
import styles from './AddPassword.module.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import PasswordContext from '../../../store/password-context'

function AddPassword(props) {
  const [title,setTitle]=useState(props.title?props.title:'')
  const [password,setPassword]=useState(props.password?props.password:'')
  const passwordCtx=useContext(PasswordContext);
  useEffect(() => {
    if (props.id !== 0) {
      const oldValue = passwordCtx.totalPasswords.find(item => item.id === props.id);
      
      if (oldValue) {
        setTitle(oldValue.title || "");
        setPassword(oldValue.password || "");
        passwordCtx.removeItem(props.id);
      }
    }
  }, [props.id]); // ✅ Now updates when `props.id` changes
  
    function onClose() {
        props.onClose()
    }
    function onAdd() {
        passwordCtx.addItem({
          title:title,password:password
        });
        props.onClose();
    }
  return (
    <Modal >
        <div>

        <Input label='Title' id='title' placeholder='title' type='text'value={title} onChange={(value)=>setTitle(value)
        }/>
        <Input label='Password' id='password' placeholder='password' type='text' value={password} onChange={(value)=>setPassword(value)
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