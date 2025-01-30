import React from 'react'
import styles from './Button.module.css'
function Button(props) {
  return (
    <button className={`${styles.button} ${props.isCancel ? styles.cancel : styles.primary}`} onClick={props.onClick}>{props.title}</button>
  )
}

export default Button;