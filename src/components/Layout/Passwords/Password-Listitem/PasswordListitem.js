import React from "react";
import Button from "../../../UI/Button/Button";
import styles from "./PasswordListitem.module.css";

function PasswordListitem({ title, password, onDelete, onEdit }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Password:</strong> {password}
        </p>
      </div>
      <div className={styles.actions}>
        <Button title="Delete" onClick={onDelete} isCancel={true} />
        <Button title="Edit" onClick={onEdit} />
      </div>
    </div>
  );
}

export default PasswordListitem;
