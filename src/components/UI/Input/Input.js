import React from 'react'
import styles from './Input.module.css';
function Input(props) {
  return (
    <div className={styles.input}>
        <label htmlFor={props.id}>
{props.label}
        </label>
        <input id={props.id} placeholder={props.placeholder} value={props.value} onChange={(event)=>props.onChange(event.target.value)} />
    </div>
  )
}

export default Input