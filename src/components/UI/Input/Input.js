import React from 'react'
import styles from './Input.module.css';
function Input(props) {
  return (
    <div className={styles.input}>
        <label htmlFor={props.id}>
{props.label}
        </label>
        <input id={props.id} {...props.input} />
    </div>
  )
}

export default Input